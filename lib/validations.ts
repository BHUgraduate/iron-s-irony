import { z } from "zod";

export const PROJECT_TYPES = ["Gate", "Railing", "Balcony", "Staircase", "Grill", "Something else"] as const;
export const SPACES = ["Private home", "Apartment or housing", "Commercial or business", "Not sure yet"] as const;
export const NEEDS = ["New construction", "Replacement", "Renovation", "Custom design"] as const;
export const ROLES = [
  { value: "homeowner", label: "Homeowner" },
  { value: "architect", label: "Architect" },
  { value: "designer", label: "Designer" },
  { value: "builder", label: "Builder" },
  { value: "business", label: "Business" },
] as const;
export const REACH = [
  { value: "phone", label: "Call me" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
] as const;

const text = (max: number) => z.string().trim().max(max, `Please keep this under ${max} characters.`).optional().default("");

/**
 * One schema for the browser and the server. The server always re-validates:
 * nothing from the client is trusted.
 */
export const enquirySchema = z
  .object({
    projectType: z.enum(PROJECT_TYPES, { errorMap: () => ({ message: "Please choose what you are looking to create." }) }),
    space: z.enum(SPACES, { errorMap: () => ({ message: "Please choose the kind of space." }) }),
    need: z.enum(NEEDS, { errorMap: () => ({ message: "Please choose what you need." }) }),
    description: z
      .string()
      .trim()
      .min(15, "Please write a little more, at least a sentence or two.")
      .max(2000, "Please keep this under 2000 characters."),
    dimensions: text(200),
    location: text(120),
    style: text(300),
    materialPreference: text(300),
    referenceLinks: text(500),
    fullName: z.string().trim().min(2, "Please tell us your name.").max(100, "That name is too long."),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[\d\s()-]{7,20}$/, "Please enter a phone number we can reach you on."),
    email: z.union([z.literal(""), z.string().trim().email("That email address does not look right.").max(160)]).optional().default(""),
    role: z.enum(["homeowner", "architect", "designer", "builder", "business"]).default("homeowner"),
    reach: z.enum(["phone", "whatsapp", "email"]).default("phone"),
    /** Honeypot. Humans never see it, so it must stay empty. */
    website: z.string().max(0).optional().default(""),
  })
  .superRefine((v, ctx) => {
    if (v.reach === "email" && !v.email) {
      ctx.addIssue({ code: "custom", path: ["email"], message: "Please add your email so we can write to you." });
    }
  });

export type EnquiryValues = z.infer<typeof enquirySchema>;
