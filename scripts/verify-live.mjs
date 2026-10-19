#!/usr/bin/env node
// Smoke test for a deployed site: node scripts/verify-live.mjs https://your-project.vercel.app
const base = (process.argv[2] || "").replace(/\/$/, "");
if (!base) {
  console.error("Usage: node scripts/verify-live.mjs <url>");
  process.exit(2);
}
const routes = ["/", "/services", "/services/gates", "/services/railings", "/services/balconies", "/services/staircases", "/services/grills", "/services/architectural-ironwork", "/services/custom-fabrication", "/projects", "/projects/courtyard-gate", "/process", "/about", "/contact", "/customers", "/faq", "/privacy", "/terms", "/robots.txt", "/sitemap.xml", "/opengraph-image", "/twitter-image", "/icon", "/apple-icon"];
let failed = 0;
const check = (ok, label, extra = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${extra ? "  " + extra : ""}`);
  if (!ok) failed++;
};
for (const r of routes) {
  const res = await fetch(base + r, { redirect: "follow" });
  check(res.status === 200, `GET ${r}`, String(res.status));
  if (r === "/") {
    const html = await res.text();
    check(/<link rel="canonical" href="https?:\/\/[^"]+"/.test(html), "canonical present");
    check(html.includes('property="og:title"') && html.includes('property="og:image"'), "Open Graph title and image");
    check(html.includes('name="twitter:card"'), "Twitter card");
    check(!html.includes("ironsirony.com") || base.includes("ironsirony.com"), "no placeholder domain in HTML");
    check(!/http:\/\/(?!localhost)/.test(html.replace(/http:\/\/www\.w3\.org[^"']*/g, "")), "no mixed-content http:// references");
  }
}
const nf = await fetch(base + "/this-page-does-not-exist");
check(nf.status === 404, "unknown route returns 404", String(nf.status));
for (const [from, to] of [["/shop", "/services"], ["/quote", "/contact"], ["/services/building-ironwork", "/services/gates"]]) {
  const res = await fetch(base + from, { redirect: "follow" });
  check(new URL(res.url).pathname === to, `redirect ${from} -> ${to}`);
}
const post = (body, headers = {}) =>
  fetch(base + "/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) });
const bad = await post({ projectType: "Gate" });
check(bad.status === 422, "API rejects incomplete enquiry", String(bad.status));
const wrongOrigin = await post({}, { Origin: "https://evil.example" });
check(wrongOrigin.status === 403, "API rejects foreign origin", String(wrongOrigin.status));
const get = await fetch(base + "/api/enquiry");
check(get.status === 405, "API rejects GET", String(get.status));
console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
process.exit(failed ? 1 : 0);
