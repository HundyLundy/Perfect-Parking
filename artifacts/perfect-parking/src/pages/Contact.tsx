import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P";

const TOPICS = [
  "Becoming a partner",
  "How the program works",
  "Revenue potential for my property",
  "Something else",
];

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  propertyAddresses: z.string().optional(),
  propertyType: z.string().optional(),
  spaces: z.string().optional(),
  topicsToDiscuss: z.array(z.string()).default([]),
  followupPreference: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyAddresses: "",
      propertyType: "",
      spaces: "",
      topicsToDiscuss: [],
      followupPreference: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const nameParts = values.name.trim().split(" ");
    const firstName = nameParts[0] || values.name;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    try {
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: values.email,
          phone: values.phone,
          property_addresses: values.propertyAddresses || "",
          propertyType: values.propertyType || "",
          spaces: values.spaces || "",
          topics_to_discuss: (values.topicsToDiscuss || []).join(", "),
          followup_preference: values.followupPreference || "",
          message: values.message || "",
          source: "Perfect Parking Website",
        }),
      });

      if (response.ok) {
        trackEvent("generate_lead", {
          event_category: "contact",
          event_label: values.propertyType || "general",
        });
        navigate("/thank-you");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <SEO
        title="Talk to Our Team | Perfect Parking"
        description="Have a question or want to explore a partnership? Reach out — no pitch, no pressure. We'll give you a straight answer."
        canonical="https://perfectparking.com/contact"
      />

      <section className="bg-muted py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left column */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">For Parking Lot Owners</p>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                Let's Talk Parking
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you have a quick question, want to explore a partnership, or just aren't sure if this is the right fit — we're here. No pitch, no pressure.
              </p>

              {/* Direct contact — above form */}
              <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-border mb-8">
                <h3 className="font-bold text-lg border-b border-border pb-4">
                  Just want to reach us?<br />
                  <span className="text-muted-foreground font-normal text-base">We respond within 24 hours — usually faster.</span>
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call or text</div>
                    <a href="tel:+13615851111" className="font-bold text-foreground text-lg hover:text-primary transition-colors">(361) 585-1111</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email us</div>
                    <a href="mailto:info@perfectsynergysolutions.com" className="font-bold text-foreground hover:text-primary transition-colors">info@perfectsynergysolutions.com</a>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  "Hotels, hospitals, multifamily, HOAs, marinas, and more",
                  "Zero upfront cost — we handle setup, signage, and software",
                  "You stay hands-off. We manage everything.",
                  "If it's not a good fit, we'll tell you that too",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Right column — form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground text-sm mb-8">Share as much or as little as you want. Only your contact info is required.</p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  {/* Required: Full Name + Phone */}
                  <div className="grid grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                        <FormControl><Input placeholder="John Smith" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number <span className="text-red-500">*</span></FormLabel>
                        <FormControl><Input placeholder="(555) 123-4567" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Required: Email */}
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl><Input placeholder="john@company.com" {...field} className="h-12 bg-muted/50" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Optional: Property Addresses */}
                  <FormField control={form.control} name="propertyAddresses" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Address(es) <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                      <FormControl><Input placeholder="e.g. 123 Main St, Austin TX — list multiple if needed" {...field} className="h-12 bg-muted/50" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  {/* Optional: Property Type + Spaces */}
                  <div className="grid grid-cols-2 gap-6">
                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/50">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border border-border shadow-lg">
                            <SelectItem value="hotel">Hotel / Resort</SelectItem>
                            <SelectItem value="hospital">Hospital / Medical</SelectItem>
                            <SelectItem value="cre">Commercial Real Estate</SelectItem>
                            <SelectItem value="multifamily">Multifamily / Apartments</SelectItem>
                            <SelectItem value="retail">Retail Center</SelectItem>
                            <SelectItem value="office">Office Building</SelectItem>
                            <SelectItem value="mixed">Mixed-Use Development</SelectItem>
                            <SelectItem value="event">Event Venue</SelectItem>
                            <SelectItem value="marina">Marina / Boat Ramp</SelectItem>
                            <SelectItem value="university">University / Campus</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="spaces" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Est. Parking Spaces <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                        <FormControl><Input placeholder="e.g. 75 — rough estimate is fine" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  {/* Optional: Topics checkboxes — 2x2 grid desktop, stacked mobile */}
                  <FormField control={form.control} name="topicsToDiscuss" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What would you like to talk about? <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                        {TOPICS.map((topic) => (
                          <label key={topic} className="flex items-center gap-2.5 cursor-pointer text-sm text-foreground">
                            <input
                              type="checkbox"
                              checked={(field.value || []).includes(topic)}
                              onChange={(e) => {
                                const current = field.value || [];
                                field.onChange(
                                  e.target.checked
                                    ? [...current, topic]
                                    : current.filter((t) => t !== topic)
                                );
                              }}
                              className="w-4 h-4 rounded accent-primary"
                            />
                            {topic}
                          </label>
                        ))}
                      </div>
                    </FormItem>
                  )} />

                  {/* Optional: Follow-up preference — horizontal desktop, stacked mobile */}
                  <FormField control={form.control} name="followupPreference" render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you prefer we follow up? <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-1">
                        {["Call me back", "Email me back", "Either works"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2.5 cursor-pointer text-sm text-foreground">
                            <input
                              type="radio"
                              value={opt}
                              checked={field.value === opt}
                              onChange={() => field.onChange(opt)}
                              className="w-4 h-4 accent-primary"
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </FormItem>
                  )} />

                  {/* Optional: Message */}
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything else you want us to know? <span className="text-gray-400 font-normal text-sm">(Optional)</span></FormLabel>
                      <FormControl><Textarea placeholder="Questions, context, or anything on your mind — totally optional" className="resize-none h-24 bg-muted/50" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>

                  <p className="text-center text-xs" style={{ color: "#6B7280" }}>
                    * Required. Everything else is optional — share as much or as little as you'd like.
                  </p>

                  {submitStatus === "error" && (
                    <p className="text-center text-red-700 font-medium bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      Something went wrong. Please call us at (361) 585-1111.
                    </p>
                  )}
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
