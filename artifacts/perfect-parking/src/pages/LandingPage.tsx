import { SEO } from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const lpFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default function LandingPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof lpFormSchema>>({
    resolver: zodResolver(lpFormSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof lpFormSchema>) {
    toast({ title: "Request Received!", description: "We will email you shortly." });
    form.reset();
  }

  return (
    <>
      <SEO title="Stop Leaving Revenue on the Table | Perfect Parking" description="Generate passive income from your parking lot." />

      <header className="p-6 absolute top-0 w-full z-50">
        <img src={`${import.meta.env.BASE_URL}logo-pp.webp`} alt="Logo" className="h-8" />
      </header>

      <main className="min-h-screen bg-navy text-white flex items-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/parking-dollar.png')] bg-cover bg-center mix-blend-overlay" />
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Attention Property Owners</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Stop Leaving Parking Revenue on the Table.
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We install a fully automated parking system at zero cost to you, handle all the enforcement, and send you a monthly deposit.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Zero upfront capital required', '100% digital, no hardware to break', 'Increases property NOI immediately'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="text-secondary w-6 h-6" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-foreground p-8 md:p-10 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">Find out how much you could earn.</h2>
            <p className="text-muted-foreground mb-8">Enter your email to receive a free, no-obligation property audit.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormControl><Input placeholder="Work Email" {...field} className="h-14 bg-muted/50 text-lg" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <button type="submit" className="w-full h-14 bg-secondary text-secondary-foreground font-bold text-lg rounded-xl hover:bg-secondary/90 shadow-[0_4px_20px_rgba(222,198,0,0.4)] transition-all">
                  Get Free Audit
                </button>
              </form>
            </Form>

            <p className="text-xs text-center text-muted-foreground mt-6">
              100% secure. We never share your data.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
