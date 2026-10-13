import { quoteFormSchema } from "@/lib/validations";
import { handleSubmission } from "@/lib/submit";

export async function POST(request: Request) {
  return handleSubmission(request, quoteFormSchema, process.env.QUOTE_FORM_WEBHOOK_URL, "quote");
}
