import { motion } from "framer-motion";
import { FaArrowRight, FaBookReader } from "react-icons/fa";

/**
 * Original line-art scales-of-justice illustration, hand-built with SVG
 * primitives so the hero carries a judiciary motif without any external
 * image asset.
 */
function ScalesIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="h-full w-full" role="img" aria-label="Illustration of the scales of justice">
      <line x1="210" y1="40" x2="210" y2="340" stroke="#B8912F" strokeWidth="2" />
      <line x1="90" y1="90" x2="330" y2="90" stroke="#B8912F" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="210" cy="88" r="7" fill="#0B0B0C" stroke="#B8912F" strokeWidth="1.5" />

      {/* Left pan */}
      <line x1="90" y1="90" x2="90" y2="160" stroke="#B8912F" strokeWidth="1.3" />
      <line x1="60" y1="160" x2="120" y2="160" stroke="#B8912F" strokeWidth="1.3" />
      <path
        d="M52 160 Q90 210 128 160"
        stroke="#B8912F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Right pan */}
      <line x1="330" y1="90" x2="330" y2="150" stroke="#B8912F" strokeWidth="1.3" />
      <line x1="300" y1="150" x2="360" y2="150" stroke="#B8912F" strokeWidth="1.3" />
      <path
        d="M292 150 Q330 195 368 150"
        stroke="#B8912F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Base */}
      <path d="M150 340 L270 340 L245 360 L175 360 Z" fill="#0B0B0C" opacity="0.9" />
      <rect x="196" y="335" width="28" height="10" fill="#0B0B0C" opacity="0.9" />

      {/* Ambient gold ring for depth */}
      <circle
        cx="210"
        cy="210"
        r="175"
        stroke="#B8912F"
        strokeOpacity="0.18"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function StatCard({ value, label, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`absolute rounded-2xl border border-hairline bg-white/95 px-5 py-4 shadow-card backdrop-blur ${className}`}
    >
      <p className="font-display text-2xl font-semibold text-ink">{value}</p>
      <p className="text-xs uppercase tracking-widest text-slate">{label}</p>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-panel ledger-texture pb-24 pt-16 sm:pt-20 lg:pb-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Judicial Services Exam Mentorship
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-paper text-balance sm:text-5xl lg:text-[3.4rem]">
            Every judgment begins with disciplined preparation.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-paper-dim/75 sm:text-lg">
            Judiciary Gold pairs veteran judicial mentors with a rigorously
            structured curriculum, so your preparation reads less like guesswork
            and more like a case built to win.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-gold"
            >
              Start Learning
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full border border-paper-dim/30 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-gold hover:text-gold"
            >
              <FaBookReader />
              Explore Courses
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <ScalesIllustration />
          <StatCard
            value="1,200+"
            label="Selections"
            className="-left-2 top-6 sm:left-0"
            delay={0.5}
          />
          <StatCard
            value="87%"
            label="Success Rate"
            className="-right-2 bottom-10 sm:right-0"
            delay={0.7}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
