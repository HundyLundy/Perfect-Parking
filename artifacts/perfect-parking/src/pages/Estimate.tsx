import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name:               z.string().min(2, "Please enter your name"),
  phone:              z.string().min(7, "Please enter your phone number"),
  email:              z.string().email("Please enter a valid email address"),
  followupPreference: z.string().optional(),
  propertyAddresses:  z.string().optional(),
  propertyType:       z.string().optional(),
  spaces:             z.string().optional(),
  message:            z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const PROPERTY_TYPES = [
  { value: "hotel",       label: "Hotel / Resort" },
  { value: "hospital",    label: "Hospital / Medical" },
  { value: "cre",         label: "Commercial Real Estate" },
  { value: "multifamily", label: "Multifamily / Apartments" },
  { value: "retail",      label: "Retail Center" },
  { value: "office",      label: "Office Building" },
  { value: "mixed",       label: "Mixed-Use Development" },
  { value: "event",       label: "Event Venue" },
  { value: "marina",      label: "Marina / Boat Ramp" },
  { value: "university",  label: "University / Campus" },
  { value: "other",       label: "Other" },
];

const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/";
const GHL_WEBHOOK_URL  = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P";
const GHL_TOKEN        = "pit-1bce996a-1890-4120-8fe3-efa0c65ea572";

const INPUT  = "w-full rounded-xl px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#dec600] focus:ring-1 focus:ring-[#dec600] transition-all text-base";
const LABEL  = "block text-white/80 text-sm font-medium mb-1.5";
const BADGE  = "text-white/40 font-normal";

export default function Estimate() {
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState(false);
  const [loading,   setLoading]   = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", phone: "", email: "",
      followupPreference: "", propertyAddresses: "",
      propertyType: "", spaces: "", message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(false);

    const nameParts = values.name.trim().split(" ");
    const firstName = nameParts[0] || values.name;
    const lastName  = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    try {
      const contactRes = await fetch(GHL_CONTACTS_URL, {
        method: "POST",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${GHL_TOKEN}`,
          "Version":       "2021-07-28",
        },
        body: JSON.stringify({
          locationId: "ZF2Qjd4J1GmT9w5XbinN",
          firstName,
          lastName,
          phone: values.phone,
          email: values.email,
          tags: ["paid-ad-estimate"],
          customFields: [
            { key: "property_addresses",  field_value: values.propertyAddresses || "" },
            { key: "property_type",       field_value: values.propertyType      || "" },
            { key: "parking_spaces",      field_value: values.spaces            || "" },
            { key: "followup_preference", field_value: values.followupPreference|| "" },
            { key: "message",             field_value: values.message           || "" },
          ],
        }),
      });
      if (!contactRes.ok) throw new Error("Contact creation failed");

      fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email:               values.email,
          phone:               values.phone,
          followup_preference: values.followupPreference || "",
          property_addresses:  values.propertyAddresses  || "",
          property_type:       values.propertyType       || "",
          parking_spaces:      values.spaces             || "",
          message:             values.message            || "",
          source: "Perfect Parking Website - Estimate Form",
        }),
      }).catch(() => {});

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Free Revenue Estimate | Perfect Parking</title>
      </Helmet>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        style={{ background: "#00305b" }}
      >
        <div className="w-full max-w-lg mx-auto flex flex-col items-center">

          <img
            src={`${import.meta.env.BASE_URL}logo-pp.webp`}
            alt="Perfect Parking"
            className="h-16 mb-10 drop-shadow-lg"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-4">
            Find out what your parking lot<br className="hidden sm:block" /> could make in 24 hours.
          </h1>

          <p className="text-white/70 text-lg text-center mb-10">
            No upfront cost. Fully managed. Revenue starts fast.
          </p>

          {submitted ? (
            <div className="w-full rounded-2xl border border-white/20 bg-white/10 backdrop-blur px-8 py-12 text-center">
              <div className="text-5xl mb-6">✅</div>
              <p className="text-white text-xl font-bold">We got it!</p>
              <p className="text-white/70 mt-2 text-lg">Expect a call or text within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full rounded-2xl border border-white/20 bg-white/8 backdrop-blur px-8 py-10 space-y-5"
              noValidate
            >

              {/* ── Required section ── */}
              <p className="text-[#dec600] text-xs font-bold uppercase tracking-widest">
                Your Contact Info
              </p>

              <div>
                <label className={LABEL}>Full Name <span className="text-[#dec600]">*</span></label>
                <input type="text" placeholder="Jane Smith" {...register("name")} className={INPUT} />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
              </div>

              <div>
                <label className={LABEL}>Phone Number <span className="text-[#dec600]">*</span></label>
                <input type="tel" placeholder="(361) 555-0000" {...register("phone")} className={INPUT} />
                {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>}
              </div>

              <div>
                <label className={LABEL}>Email <span className="text-[#dec600]">*</span></label>
                <input type="email" placeholder="jane@company.com" {...register("email")} className={INPUT} />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
              </div>

              {/* ── Optional section ── */}
              <div className="border-t border-white/15 pt-2">
                <p className="text-[#dec600] text-xs font-bold uppercase tracking-widest">
                  Optional — Share More to Speed Things Up
                </p>
              </div>

              {/* Follow-up preference */}
              <div>
                <label className={LABEL}>
                  How would you prefer we follow up? <span className={BADGE}>(Optional)</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-1">
                  {["Call me back", "Email me back", "Either works"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2.5 cursor-pointer text-sm text-white/80">
                      <input
                        type="radio"
                        value={opt}
                        {...register("followupPreference")}
                        className="w-4 h-4 accent-[#dec600]"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Property Addresses */}
              <div>
                <label className={LABEL}>
                  Property Address(es) <span className={BADGE}>(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 123 Main St, Austin TX — list multiple if needed"
                  {...register("propertyAddresses")}
                  className={INPUT}
                />
              </div>

              {/* Property Type */}
              <div>
                <label className={LABEL}>
                  Property Type <span className={BADGE}>(Optional)</span>
                </label>
                <select {...register("propertyType")} className={`${INPUT} appearance-none`}>
                  <option value="" className="bg-[#00305b]">Select type</option>
                  {PROPERTY_TYPES.map(({ value, label }) => (
                    <option key={value} value={value} className="bg-[#00305b]">{label}</option>
                  ))}
                </select>
              </div>

              {/* Parking Spaces */}
              <div>
                <label className={LABEL}>
                  Est. Parking Spaces <span className={BADGE}>(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 75 — rough estimate is fine"
                  {...register("spaces")}
                  className={INPUT}
                />
              </div>

              {/* Message */}
              <div>
                <label className={LABEL}>
                  Anything else you want us to know? <span className={BADGE}>(Optional)</span>
                </label>
                <textarea
                  placeholder="Questions, context, or anything on your mind — totally optional"
                  {...register("message")}
                  className={`${INPUT} resize-none h-24`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "#dec600", color: "#00305b" }}
              >
                {loading ? "Sending…" : "Get My Free Revenue Estimate"}
              </button>

              {error && (
                <p className="text-red-400 text-sm text-center pt-1">
                  Something went wrong. Please call us directly at (361) 585-1111.
                </p>
              )}
            </form>
          )}

          <p className="text-white/40 text-sm mt-6 text-center">
            We respond within 24 hours. No spam, ever.
          </p>

        </div>
      </div>
    </>
  );
}
