"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quoteFormSchema,
  QuoteFormValues,
  customerTypeEnum,
  serviceCategoryEnum,
  contactMethodEnum,
} from "@/lib/validations";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileCheck,
  RotateCcw,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";

export function QuoteForm() {
  const searchParams = useSearchParams();
  
  const [submissionStatus, setSubmissionStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [uploadedFiles, setUploadedFiles] = React.useState<string[]>([]);
  const [inquiryReference, setInquiryReference] = React.useState<string>("");

  // Resolve pre-populated values from URL query parameters
  const initialCustomerType = searchParams.get("customerType");
  const initialService = searchParams.get("service");
  const initialProduct = searchParams.get("product");
  const initialReference = searchParams.get("reference");

  const defaultValues: Partial<QuoteFormValues> = {
    customerType:
      initialCustomerType && ["homeowner", "architect", "interior_designer", "builder_contractor", "commercial_developer"].includes(initialCustomerType)
        ? (initialCustomerType as any)
        : "homeowner",
    serviceCategory:
      initialService && ["building_ironwork", "architectural_ironwork", "decorative_ironwork", "custom_fabrication", "shop_catalog_inquiry"].includes(initialService)
        ? (initialService as any)
        : initialProduct
        ? "shop_catalog_inquiry"
        : "custom_fabrication",
    projectDescription: initialReference
      ? `Referencing commission study: ${initialReference}. Need similar structural design or bespoke sizing.`
      : initialProduct
      ? `Inquiry regarding catalog model: ${initialProduct}. Requesting quotation based on site reveals.`
      : "",
    preferredContactMethod: "email",
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues,
  });

  // Simulated drag-and-drop / file selector
  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedFiles((prev) => [...prev, ...names]);
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmissionStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const referenceId = `IRN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryReference(referenceId);
      setSubmissionStatus("success");
    } catch (err) {
      setSubmissionStatus("error");
    }
  };

  const handleResetForm = () => {
    reset();
    setUploadedFiles([]);
    setSubmissionStatus("idle");
    setInquiryReference("");
  };

  if (submissionStatus === "success") {
    return (
      <div className="border border-border-structural bg-canvas-card p-8 sm:p-12 text-left space-y-6">
        <div className="w-12 h-12 border border-border-structural bg-canvas-subtle flex items-center justify-center text-status-success">
          <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-architectural text-accent-bronze">
            Fabrication Brief Received
          </span>
          <h3 className="font-serif text-3xl text-ink-primary font-medium">
            Specification Handed to the Atelier
          </h3>
          <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
            Thank you for submitting your project specifications. Our workshop engineers and estimating team are reviewing your dimensions, material criteria, and site constraints.
          </p>
        </div>
        <div className="border border-border-structural bg-canvas-subtle p-5 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-ink-muted uppercase">Inquiry Tracking Code:</span>
            <span className="text-ink-primary font-bold text-sm tracking-wider">
              {inquiryReference}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-ink-muted uppercase">Target Response Window:</span>
            <span className="text-ink-primary">1 to 2 business days</span>
          </div>
          {uploadedFiles.length > 0 && (
            <div className="pt-2 border-t border-border-subtle flex items-start justify-between">
              <span className="text-ink-muted uppercase">Attached Files:</span>
              <span className="text-ink-primary text-right">
                {uploadedFiles.length} drawings/photos registered
              </span>
            </div>
          )}
        </div>
        <div className="space-y-3 pt-4 border-t border-border-subtle">
          <span className="text-xs font-mono uppercase tracking-architectural text-ink-primary block font-medium">
            What Happens Next:
          </span>
          <ul className="space-y-2 text-xs font-mono text-ink-secondary">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
              <span>We check structural feasibility and verify that designated pickets satisfy the universal 4-inch sphere safety code.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
              <span>An itemized proposal is formulated detailing steel mass weight, forging hours, and duplex protective coatings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-accent-bronze mt-1.5 shrink-0" />
              <span>We contact you via your preferred method to discuss questions, schedule site surveys, or finalize shop drawings.</span>
            </li>
          </ul>
        </div>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Button href="/projects" variant="primary" size="md">
            Explore Completed Commissions
          </Button>
          <button
            type="button"
            onClick={handleResetForm}
            className="px-5 py-3 border border-border-structural text-xs font-mono uppercase tracking-architectural hover:border-ink-primary text-ink-primary transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Submit Another Specification</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border border-border-structural bg-canvas-card p-6 sm:p-10 shadow-sm space-y-8"
      aria-label="Fabrication Quotation Request Form"
    >
      {/* Form Section 01: Client Role & Identity */}
      <div>
        <div className="flex items-center gap-2 border-b border-border-structural pb-3 mb-6">
          <span className="font-serif text-lg text-accent-bronze font-medium">01</span>
          <h3 className="font-serif text-lg text-ink-primary font-medium">
            Client Role & Contact Coordinates
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name or Practice Contact"
            requiredIndicator
            placeholder="e.g. Alistair Vance / Studio Vance"
            error={errors.fullName?.message}
            {...register("fullName")}
          />
          <Input
            label="Email Address"
            type="email"
            requiredIndicator
            placeholder="e.g. avance@studiovance.com"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Direct Telephone Number"
            type="tel"
            requiredIndicator
            placeholder="e.g. +1 (555) 019-2834"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Select
            label="Your Professional Role / Client Type"
            requiredIndicator
            options={[
              { value: "homeowner", label: "Private Homeowner / Estate Owner" },
              { value: "architect", label: "Architect / Specifier" },
              { value: "interior_designer", label: "Interior Designer / Atelier" },
              { value: "builder_contractor", label: "General Contractor / Builder" },
              { value: "commercial_developer", label: "Commercial / Institutional Client" },
              { value: "other", label: "Other Trade Professional" },
            ]}
            error={errors.customerType?.message}
            {...register("customerType")}
          />
        </div>
      </div>

      {/* Form Section 02: Fabrication Scope & Requirements */}
      <div>
        <div className="flex items-center gap-2 border-b border-border-structural pb-3 mb-6">
          <span className="font-serif text-lg text-accent-bronze font-medium">02</span>
          <h3 className="font-serif text-lg text-ink-primary font-medium">
            Fabrication Discipline & Physical Parameters
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Fabrication Discipline"
            requiredIndicator
            options={[
              { value: "building_ironwork", label: "Building Ironwork (Gates, Grilles, Structural Lintels)" },
              { value: "architectural_ironwork", label: "Architectural Ironwork (Stairs, Balustrades, Glazed Doors)" },
              { value: "decorative_ironwork", label: "Decorative Ironwork (Hand-Forged Scrolls, Garden Arches)" },
              { value: "custom_fabrication", label: "Custom Metal Fabrication (Bespoke Solvers, Prototypes)" },
              { value: "shop_catalog_inquiry", label: "Shop Catalog Model Sizing" },
              { value: "restoration_repair", label: "Heritage Restoration & Modification" },
            ]}
            error={errors.serviceCategory?.message}
            {...register("serviceCategory")}
          />
          <Input
            label="Project Location (City / Region)"
            requiredIndicator
            placeholder="e.g. Hudson Valley, NY or London, UK"
            error={errors.projectLocation?.message}
            {...register("projectLocation")}
          />
          <Input
            label="Approximate Dimensions (W × H × D or Linear Span)"
            placeholder="e.g. 3600mm span × 2200mm height or 14.5 linear meters"
            helperText="Provide rough measurements; millimeter verification follows during shop drafting."
            error={errors.approxDimensions?.message}
            {...register("approxDimensions")}
          />
          <Input
            label="Quantity / Number of Apertures"
            placeholder="e.g. 1 dual-leaf gate, 4 window grilles, 1 staircase run"
            error={errors.quantity?.message}
            {...register("quantity")}
          />
          <Select
            label="Preferred Metallurgy"
            options={[
              { value: "solid_carbon_steel", label: "Solid Carbon Steel (S275 / S355 — Structural Standard)" },
              { value: "corten_steel", label: "Corten Weathering Steel (ASTM A588 — Natural Rust Patina)" },
              { value: "architectural_bronze", label: "Silicon Bronze & Milled Brass Accents" },
              { value: "stainless_steel", label: "Stainless Steel (Grade 304 / Marine Grade 316)" },
              { value: "atelier_recommendation", label: "Atelier Recommendation Based on Load & Exposure" },
            ]}
            error={errors.preferredMaterial?.message}
            {...register("preferredMaterial")}
          />
          <Select
            label="Protective Finish Specification"
            options={[
              { value: "duplex_galvanized_polyurethane", label: "Duplex Hot-Dip Galvanized + Matte Polyurethane (Exterior Permanent)" },
              { value: "powder_coat_qualicoat", label: "Architectural Electrostatic Powder Coat (Class 2 Standard)" },
              { value: "cold_black_oxide_wax", label: "Chemical Cold Blackening Patina + Hardwax Oil (Interior Architectural)" },
              { value: "traditional_linseed_wax", label: "Traditional Linseed Oil & Graphite Wax (Heritage Blacksmith Finish)" },
              { value: "undecided", label: "Discuss Recommended Barrier With Fabricators" },
            ]}
            error={errors.preferredFinish?.message}
            {...register("preferredFinish")}
          />
        </div>
      </div>

      {/* Form Section 03: Narrative Brief & Commercial Constraints */}
      <div>
        <div className="flex items-center gap-2 border-b border-border-structural pb-3 mb-6">
          <span className="font-serif text-lg text-accent-bronze font-medium">03</span>
          <h3 className="font-serif text-lg text-ink-primary font-medium">
            Project Description & Blueprint Uploads
          </h3>
        </div>
        <div className="space-y-6">
          <Textarea
            label="Detailed Project Brief & Structural Constraints"
            requiredIndicator
            rows={5}
            placeholder="Describe your design intent, substrate mounting surfaces (e.g. soft brick, reinforced concrete, timber headers), aesthetic details, or references to published atelier case studies..."
            error={errors.projectDescription?.message}
            {...register("projectDescription")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Anticipated Project Timeline / Critical Path"
              placeholder="e.g. Scaffolding strike by October; installation in Q4"
              error={errors.timelineNotes?.message}
              {...register("timelineNotes")}
            />
            <Select
              label="Preferred Communication Method"
              options={[
                { value: "email", label: "Email (Itemized proposal with PDF drawings)" },
                { value: "phone", label: "Telephone (Direct fabricator discussion)" },
                { value: "whatsapp", label: "WhatsApp (Drawing review & message updates)" },
              ]}
              error={errors.preferredContactMethod?.message}
              {...register("preferredContactMethod")}
            />
          </div>

          {/* Blueprint & Reference Upload Dropzone */}
          <div>
            <label className="text-xs font-mono uppercase tracking-architectural text-ink-secondary block mb-2">
              Drawings, CAD Files or Job-Site Photos (Optional)
            </label>
            <div className="border border-dashed border-border-structural bg-canvas-subtle p-6 text-center hover:border-ink-primary transition-colors cursor-pointer relative">
              <input
                type="file"
                multiple
                accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.step,.skp"
                onChange={handleFileSelection}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                aria-label="Upload architectural drawings or site photos"
              />
              <UploadCloud className="w-8 h-8 text-accent-bronze mx-auto mb-2" aria-hidden="true" />
              <span className="text-xs font-mono text-ink-primary block font-medium">
                Click or drag blueprints, PDF elevations, DWG vectors, or site photographs
              </span>
              <span className="text-[10px] font-mono text-ink-muted block mt-1">
                Supported formats: PDF, DWG, DXF, STEP, JPG, PNG (Max 50MB per file)
              </span>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="mt-3 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
                  Attached for Evaluation:
                </span>
                <div className="flex flex-wrap gap-2">
                  {uploadedFiles.map((file, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-canvas-subtle border border-border-structural text-xs font-mono text-ink-primary"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-accent-bronze" />
                      <span>{file}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Submission State Feedback Banner */}
      {submissionStatus === "error" && (
        <div
          role="alert"
          className="border border-status-error bg-status-error/10 p-4 text-xs font-mono text-status-error flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            An unexpected error occurred while transmitting your project details. Please review your fields, ensure telephone format is valid, or contact our workshop directly at <span className="underline">bhugraduate@gmail.com</span>.
          </p>
        </div>
      )}

      {/* Action Bar */}
      <div className="pt-6 border-t border-border-structural flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[11px] font-mono text-ink-muted">
          <ShieldCheck className="w-4 h-4 text-accent-bronze shrink-0" aria-hidden="true" />
          <span>Strict non-disclosure: Blueprints and site coordinates remain confidential.</span>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submissionStatus === "submitting"}
          className="w-full sm:w-auto"
        >
          {submissionStatus === "submitting" ? (
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 animate-spin" />
              <span>Transmitting Specs...</span>
            </span>
          ) : (
            <span>Submit Quotation Request</span>
          )}
        </Button>
      </div>
    </form>
  );
}
