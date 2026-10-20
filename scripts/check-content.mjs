// Validates data/feedback.json before every deploy. Fails the build on anything that should never be published.
// Run: npm run check:content
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const file = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "feedback.json");
const ROLES = ["homeowner", "architect", "designer", "builder", "business"];
const PROJECT_TYPES = ["Gate", "Railing", "Balcony", "Staircase", "Grill", "Something else"];
const problems = [];

let entries;
try {
  entries = JSON.parse(readFileSync(file, "utf8"));
} catch (e) {
  console.error(`data/feedback.json is not valid JSON: ${e.message}`);
  process.exit(1);
}
if (!Array.isArray(entries)) {
  console.error("data/feedback.json must be an array.");
  process.exit(1);
}

const seen = new Set();
const today = new Date().toISOString().slice(0, 10);
const placeholder = /lorem|ipsum|placeholder|\btbd\b|x{3,}|test person|test only|\bsample\b|\bdummy\b|your words here/i;
const contactLike = /[\w.+-]+@[\w-]+\.[\w.]+|(?:\+?\d[\s().-]?){8,}|https?:\/\/|www\./i;

entries.forEach((e, i) => {
  const w = `entry ${i + 1}${e && e.id ? ` (${e.id})` : ""}`;
  const bad = (m) => problems.push(`${w}: ${m}`);
  if (!e || typeof e !== "object") return bad("must be an object");
  for (const k of ["id", "quote", "name", "role", "date"]) if (typeof e[k] !== "string" || !e[k].trim()) bad(`missing "${k}"`);
  const known = new Set(["id", "quote", "name", "role", "projectType", "place", "date"]);
  for (const k of Object.keys(e)) if (!known.has(k)) bad(`unknown field "${k}" (contact details and consent notes must never be stored here)`);
  if (e.id) {
    if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$/.test(e.id)) bad('id should look like "2026-11-02-ravi"');
    if (seen.has(e.id)) bad("duplicate id");
    seen.add(e.id);
  }
  if (e.quote && (e.quote.length < 20 || e.quote.length > 800)) bad("quote must be 20 to 800 characters");
  if (e.name && (e.name.length < 2 || e.name.length > 100)) bad("name must be 2 to 100 characters");
  if (e.role && !ROLES.includes(e.role)) bad(`role must be one of ${ROLES.join(", ")}`);
  if (e.projectType && !PROJECT_TYPES.includes(e.projectType)) bad(`projectType must be one of ${PROJECT_TYPES.join(", ")}`);
  if (e.date && (!/^\d{4}-\d{2}-\d{2}$/.test(e.date) || Number.isNaN(Date.parse(e.date)))) bad("date must be a real ISO date (YYYY-MM-DD)");
  else if (e.date > today) bad("date is in the future");
  for (const k of ["quote", "name", "place"]) {
    const v = e[k];
    if (typeof v !== "string") continue;
    if (placeholder.test(v)) bad(`${k} looks like placeholder text`);
    if (/[<>]/.test(v)) bad(`${k} contains markup characters`);
    if (k !== "quote" && contactLike.test(v)) bad(`${k} looks like contact details`);
  }
  if (e.quote && contactLike.test(e.quote)) bad("quote contains an email, phone number or link: never publish contact details");
});

if (problems.length) {
  console.error(`data/feedback.json has ${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`data/feedback.json OK (${entries.length} published ${entries.length === 1 ? "entry" : "entries"}).`);
