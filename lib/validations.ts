import { z } from "zod";

export const customerTypeEnum = z.enum([
  "homeowner",
  "architect",
  "interior_designer",
  "builder_contractor",
  "commercial_developer",
  "other",
]);

export const serviceCategoryEnum = z.enum([
  "building_ironwork",
  "architectural_ironwork",
  "decorative_ironwork",
  "custom_fabrication",
  "restoration_repair",
  "shop_catalog_inquiry",
]);

export const contactMethodEnum = z.enum(["email", "phone", "whatsapp"]);

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name exceeds allowable length."),
  email: z.string().email("Please provide a valid email address."),
  phone: z
    .string()
    .min(6, "Please provide a valid contact telephone number.")
    .max(30, "Phone number is too long."),
  customerType: customerTypeEnum,
  serviceCategory: serviceCategoryEnum,
  projectType: z.string().optional(),
  projectLocation: z
    .string()
    .min(2, "Please indicate the project city or region."),
  approxDimensions: z.string().optional(),
  quantity: z.string().optional(),
  preferredMaterial: z.string().optional(),
  preferredFinish: z.string().optional(),
  budgetRange: z.string().optional(),
  timelineNotes: z.string().optional(),
  projectDescription: z
    .string()
    .min(15, "Please provide at least 15 characters describing your project requirements.")
    .max(4000, "Project description cannot exceed 4000 characters."),
  preferredContactMethod: contactMethodEnum.default("email"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z.string().email("A valid email address is required."),
  phone: z.string().optional(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject is too long."),
  message: z
    .string()
    .min(15, "Message must be at least 15 characters in length.")
    .max(3000, "Message cannot exceed 3000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;