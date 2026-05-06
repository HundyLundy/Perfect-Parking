import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { Phone, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  propertyType: z.string().min(1, "Please select a property type"),
  spaces: z.string().min(1, "Please estimate spaces"),
  message: z.string().optional(),
});

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, navigate] = useLocation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      spaces: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
          message: values.message || "",
          propertyType: values.propertyType,
          spaces: values.spaces,
          source: "Perfect Parking Website",
        }),
      });

      if (response.ok) {
        trackEvent("generate_lead", {
          event_category: "contact",
          event_label: values.propertyType,
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
        title="Perfect Parking | Hassle-Free Parking Management"
        description="We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners generate consistent monthly revenue from underutilized parking. Zero upfront cost. Zero staff required."
        canonical="https://perfectparking.com/contact"
      />

      <section className="bg-muted py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Get Your Free Parking Revenue Estimate.
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                In 15 minutes, we'll identify your exact revenue opportunity and build a custom monetization plan for your property.
              </p>

              <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-border mb-8">
                <h3 className="font-bold text-lg border-b border-border pb-4">Direct Contact</h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call us directly</div>
                    <a href="tel:+13615851111" className="font-bold text-foreground text-lg hover:text-primary transition-colors">Ph: (361) 585-1111</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email us</div>
                    <a href="mailto:info@perfectparking.com" className="font-bold text-foreground hover:text-primary transition-colors">info@perfectparking.com</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Cooper Lundquist — Direct</p>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <a href="tel:+13615332159" className="font-bold text-foreground hover:text-primary transition-colors">(361) 533-2159</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <a href="mailto:cooper@perfectparking.com" className="font-bold text-foreground hover:text-primary transition-colors">cooper@perfectparking.com</a>
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground bg-primary/5 p-4 rounded-lg border border-primary/20">
                <strong className="text-foreground">What happens next?</strong><br />
                1. We review your property via satellite map.<br />
                2. We project monthly revenue based on comparable lots.<br />
                3. We schedule a quick call to share the numbers.
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="(555) 123-4567" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email</FormLabel>
                      <FormControl><Input placeholder="john@company.com" {...field} className="h-12 bg-muted/50" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="grid grid-cols-2 gap-6">
                    <FormField control={form.control} name="propertyType" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/50">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
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
                        <FormLabel>Est. Parking Spaces</FormLabel>
                        <FormControl><Input placeholder="e.g. 100" {...field} className="h-12 bg-muted/50" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl><Textarea placeholder="Tell us about your property..." className="resize-none h-24 bg-muted/50" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Estimate Request"}
                  </button>

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
