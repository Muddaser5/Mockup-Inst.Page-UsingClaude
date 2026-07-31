import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import updates from "../data/updates.js";

const TAG_STYLES = {
  Notification: "bg-gold/10 text-gold-deep",
  Article: "bg-ink/5 text-ink",
  Video: "bg-gold/10 text-gold-deep",
  Result: "bg-ink text-gold",
};

function Updates() {
  return (
    <section id="updates" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest Updates"
          title="Notifications, articles and results, in one place"
          subtitle="A running record of everything an aspirant needs to track this admission cycle."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, i) => (
            <motion.article
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="flex flex-col gap-3 rounded-2xl border border-hairline bg-white p-6 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`rounded-full px-3 py-1 font-semibold uppercase tracking-wide ${
                    TAG_STYLES[update.tag] ?? "bg-ink/5 text-ink"
                  }`}
                >
                  {update.tag}
                </span>
                <time className="font-mono text-slate">{update.date}</time>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {update.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate">{update.excerpt}</p>
              <a
                href="#updates"
                className="mt-1 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
              >
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Updates;
