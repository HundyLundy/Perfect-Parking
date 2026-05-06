import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  address: z.string().min(3, "Please enter your property address"),
  spaces: z.coerce.number().min(1, "Please enter the number of spaces"),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter your phone number"),
});

type FormValues = z.infer<typeof schema>;

const WEBHOOK = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/KkGW9R8Rqu2pZUvyYS6P";

export default function Estimate() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: values.address,
          spaces: values.spaces,
          name: values.name,
          phone: values.phone,
          source: "paid-ad-estimate",
        }),
      });
      if (!res.ok) throw new Error("Bad response");
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
              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Property Address <span className="text-[#dec600]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="123 Main St, Austin, TX"
                  {...register("address")}
                  className="w-full rounded-xl px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#dec600] focus:ring-1 focus:ring-[#dec600] transition-all text-base"
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.address.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Number of Parking Spaces <span className="text-[#dec600]">*</span>
                </label>
                <input
                  type="number"
                  min={1}
                  placeholder="e.g. 50"
                  {...register("spaces")}
                  className="w-full rounded-xl px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#dec600] focus:ring-1 focus:ring-[#dec600] transition-all text-base"
                />
                {errors.spaces && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.spaces.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Your Name <span className="text-[#dec600]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  {...register("name")}
                  className="w-full rounded-xl px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#dec600] focus:ring-1 focus:ring-[#dec600] transition-all text-base"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-1.5">
                  Phone Number <span className="text-[#dec600]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(361) 555-0000"
                  {...register("phone")}
                  className="w-full rounded-xl px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#dec600] focus:ring-1 focus:ring-[#dec600] transition-all text-base"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>
                )}
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
