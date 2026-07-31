import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";
import testimonials from "../data/testimonials.js";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our selected students say"
          align="center"
        />

        <div className="relative mt-14 rounded-2xl border border-hairline bg-white p-8 shadow-card sm:p-12">
          <FaQuoteLeft className="text-gold/30" size={32} aria-hidden="true" />

          <div className="min-h-[9rem] sm:min-h-[7rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4"
              >
                <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
                  “{current.quote}”
                </p>
                <footer className="mt-5 text-sm text-slate">
                  <span className="font-semibold text-ink">{current.name}</span>
                  {" — "}
                  {current.role}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "bg-hairline"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:border-gold hover:text-gold"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
