import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaMedal } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";

const PILLARS = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "To make judicial services preparation structured and measurable, replacing scattered self-study with a clear, mentor-guided path to selection.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "A bench shaped by aspirants who were trained not just to clear an exam, but to think and write like the officers they are becoming.",
  },
  {
    icon: FaMedal,
    title: "Why Choose Judiciary Gold",
    text: "Faculty who have sat on the bench, evaluated mains scripts, and built a curriculum around what actually earns marks — not just what looks thorough.",
  },
];

function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Institute"
          title="Built by people who have sat on the other side of the exam"
          subtitle="Judiciary Gold exists for one reason: to turn dedicated law graduates into confident, well-prepared judicial officers."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group rounded-2xl border border-hairline bg-white p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold">
                <pillar.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
