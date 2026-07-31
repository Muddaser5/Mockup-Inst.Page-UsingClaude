import { motion } from "framer-motion";
import { FaClock, FaLaptop } from "react-icons/fa";

function CourseCard({ course, index }) {
  const Icon = course.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <div className="flex h-36 items-center justify-center bg-ink-panel">
        <Icon className="text-gold" size={38} aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{course.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate">{course.description}</p>

        <div className="flex flex-wrap items-center gap-4 border-t border-hairline pt-4 text-xs text-slate">
          <span className="inline-flex items-center gap-1.5">
            <FaClock className="text-gold" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FaLaptop className="text-gold" /> {course.mode}
          </span>
        </div>

        <a
          href="#contact"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors group-hover:bg-gold group-hover:text-ink"
        >
          Enroll Now
        </a>
      </div>
    </motion.article>
  );
}

export default CourseCard;
