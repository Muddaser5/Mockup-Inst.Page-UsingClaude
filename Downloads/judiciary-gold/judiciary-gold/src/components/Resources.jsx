import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import resources from "../data/resources.js";

function Resources() {
  return (
    <section id="resources" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Study Resources"
          title="Everything you need between classes"
          subtitle="A single, organised library so revision never depends on hunting through scattered PDFs."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-white p-6 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold-deep transition-colors group-hover:bg-ink group-hover:text-gold">
                <resource.icon size={20} />
              </span>
              <h3 className="font-display text-base font-semibold text-ink">
                {resource.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate">{resource.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
