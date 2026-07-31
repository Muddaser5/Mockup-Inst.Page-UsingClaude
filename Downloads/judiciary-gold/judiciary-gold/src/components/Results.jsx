import SectionHeading from "./SectionHeading.jsx";
import useCountUp from "../hooks/useCountUp.js";

const STATS = [
  { end: 1200, suffix: "+", label: "Selections" },
  { end: 87, suffix: "%", label: "Success Rate" },
  { end: 9500, suffix: "+", label: "Students Trained" },
  { end: 24, suffix: "", label: "Courses Offered" },
];

function StatCounter({ end, suffix, label }) {
  const [ref, value] = useCountUp(end);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <p className="font-display text-4xl font-semibold text-gold sm:text-5xl">
        {value.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-paper-dim/70">{label}</p>
    </div>
  );
}

function Results() {
  return (
    <section id="results" className="bg-ink-panel ledger-texture py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Track Record"
          title="Results measured in selections, not promises"
          tone="dark"
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-10 sm:gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
