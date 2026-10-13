import { contactFormSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/submit";

export async function POST(request: Request) {
  return handleSubmission(request, contactFormSchema, process.env.CONTACT_FORM_WEBHOOK_URL, "contact");
}
