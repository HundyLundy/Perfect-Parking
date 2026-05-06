import React, { useState } from "react";
import { X } from "lucide-react";

export type ModalVariant = "parking" | "combo";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  parkingSpaces: string;
  message: string;
}

const INITIAL: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyAddress: "",
  parkingSpaces: "",
  message: "",
};

const WEBHOOK = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P";

const CONFIG = {
  parking: {
    title: "Get Your Free Parking Estimate",
    subtitle: "Tell us about your property and we'll build a custom revenue projection — free, no commitment.",
    division: "Perfect Parking",
    source: "perfect-parking-website",
    success: "Thanks! We'll be in touch within 1 business day with your free parking estimate.",
    cta: "Submit — Get My Free Estimate",
  },
  combo: {
    title: "Get the Combo Deal — Parking + Water",
    subtitle: "Tell us about your property and we'll put together a combined analysis for both divisions.",
    division: "Perfect Combo",
    source: "perfect-parking-crosssell",
    success: "Perfect. We'll reach out within 1 business day with a combined analysis.",
    cta: "Submit — Get Combined Estimate",
  },
};

interface ContactModalProps {
  variant: ModalVariant;
  onClose: () => void;
}

export function ContactModal({ variant, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const config = CONFIG[variant];

  const setField =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          propertyAddress: form.propertyAddress,
          parkingSpaces: form.parkingSpaces,
          message: form.message,
          division: config.division,
          source: config.source,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        <div className="bg-white border-b border-border px-6 py-5 flex items-start justify-between rounded-t-2xl shrink-0">
          <div className="pr-4">
            <h2 className="text-xl font-display font-bold text-foreground leading-snug">{config.title}</h2>
            <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{config.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors shrink-0 mt-0.5"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-6 py-5 space-y-4 overflow-y-auto"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="John"
                value={form.firstName}
                onChange={setField("firstName")}
                className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Smith"
                value={form.lastName}
                onChange={setField("lastName")}
                className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={setField("email")}
              className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={setField("phone")}
              className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Property Address or City <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="123 Main St, Austin, TX"
              value={form.propertyAddress}
              onChange={setField("propertyAddress")}
              className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Estimated Number of Parking Spaces <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              min="1"
              placeholder="50"
              value={form.parkingSpaces}
              onChange={setField("parkingSpaces")}
              className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              Tell us about your property{" "}
              <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Type of property, current parking situation, questions..."
              value={form.message}
              onChange={setField("message")}
              className="w-full px-3 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
              {config.success}
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
              Something went wrong. Please call us at (361) 533-2159 or email{" "}
              <a href="mailto:support@perfectparking.com" className="underline font-semibold">
                support@perfectparking.com
              </a>
            </div>
          )}

          {status !== "success" && (
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md disabled:opacity-60 text-base"
            >
              {status === "loading" ? "Submitting…" : config.cta}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
