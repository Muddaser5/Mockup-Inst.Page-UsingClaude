import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import faculty from "../data/faculty.js";

function Faculty() {
  return (
    <section id="faculty" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Faculty"
          title="Mentors who have graded, argued, and judged"
          subtitle="Every mentor at Judiciary Gold brings direct experience of the exam, the bench, or the bar — not just subject knowledge."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center rounded-2xl border border-hairline bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-ink font-display text-xl font-semibold text-gold"
                aria-hidden="true"
              >
                {member.initials}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold-deep">{member.subject}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate">
                {member.experience} experience
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
