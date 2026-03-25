import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Cooper Lundquist",
      initials: "CL",
      role: "Co-Founder",
      phone: "361-533-2159",
      email: "cooper@perfectparking.com"
    },
    {
      name: "Ray Euresti",
      initials: "RE",
      role: "Co-Founder"
    },
    {
      name: "Hunter Lundquist",
      initials: "HL",
      role: "Co-Founder",
      phone: "720-937-3004"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Parking is a revenue asset, not an afterthought.",
      desc: "We treat every square foot of asphalt like a P&L line item. If it's generating $0, that's a problem we solve."
    },
    {
      icon: Zap,
      title: "Execution over theory.",
      desc: "We don't sell slide decks. We deploy systems, fix leakage, and put money in our partners' accounts — then we let the numbers speak."
    },
    {
      icon: ShieldCheck,
      title: "Transparency in reporting and results.",
      desc: "You see what we see. Live dashboards, honest projections, and no hidden fees. If it's not working, we'll tell you before you ask."
    },
    {
      icon: TrendingUp,
      title: "Aligned incentives with property owners.",
      desc: "We only win when you win. Our model is built around shared upside, which means our incentives are always in your corner."
    }
  ];

  return (
    <>
      <SEO title="About Us | Perfect Parking" description="Meet the founders of Perfect Parking — operators and problem-solvers building the modern parking revenue platform." />

      {/* HERO */}
      <section className="py-24 bg-muted text-center border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Operators and problem-solvers, not corporate consultants.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a team of real estate and technology operators dedicated to unlocking the hidden value sitting in commercial parking assets across the country.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              The co-founders of Perfect Parking — detailed bios coming soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 mx-auto bg-primary text-white font-display font-bold text-2xl flex items-center justify-center rounded-full mb-6 shadow-md">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
                {member.phone && (
                  <p className="text-muted-foreground text-sm">{member.phone}</p>
                )}
                {member.email && (
                  <p className="text-muted-foreground text-sm">{member.email}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center bg-muted border border-border rounded-2xl p-8">
            <p className="text-muted-foreground italic leading-relaxed">
              Full leadership bios and company story are coming soon. In the meantime, reach out directly — we're happy to tell you more about why we built this.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-navy leading-relaxed">
            "Turn every underutilized parking space into a revenue asset.<br />
            <span className="text-primary">One partner. Proven strategies. More profit.</span>"
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">What drives us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Our Core Values</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <v.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{v.title}</h3>
                  <p className="text-white/70 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
