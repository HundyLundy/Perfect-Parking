import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function About() {
  const team = [
    { name: "Cooper Lundquist", initials: "CL", photo: "team-cooper.png" },
    { name: "Ray Euresti",      initials: "RE", photo: null },
    { name: "Laura Lundquist",  initials: "LL", photo: "team-laura.png" },
    { name: "Hunter Lundquist", initials: "HL", photo: "team-hunter.png" },
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
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">
            Operators and problem-solvers, not corporate consultants.
          </h1>
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

          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-8 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                {member.photo ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${member.photo}`}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover object-top mb-5 shadow-md ring-4 ring-primary/20"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto bg-primary text-white font-display font-bold text-xl flex items-center justify-center rounded-full mb-5 shadow-md ring-4 ring-primary/20">
                    {member.initials}
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
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

      {/* MILITARY WARRIORS PARTNERSHIP */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10">
            <div className="shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}military-partner.png`}
                alt="Round Rock Military Warriors"
                className="h-28 w-auto object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Community Partner</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Proud Partners with the Round Rock Military Warriors
              </h2>
              <p className="text-white/80 leading-relaxed">
                Perfect Parking is honored to partner with the Round Rock Military Warriors — an organization dedicated to supporting veterans, active-duty service members, and their families. We believe in giving back to those who have given so much, and this partnership reflects our commitment to the communities we serve. A portion of our growth goes toward supporting veteran programs in Texas.
              </p>
            </div>
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
