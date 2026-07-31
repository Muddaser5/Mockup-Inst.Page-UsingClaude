import { motion } from "framer-motion";

/**
 * Reusable heading block: eyebrow label + display title + optional subtitle.
 * `tone` switches text colors for use on light or dark (ink) section backgrounds.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-paper-dim/70" : "text-slate";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-semibold ${titleColor} text-balance`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
