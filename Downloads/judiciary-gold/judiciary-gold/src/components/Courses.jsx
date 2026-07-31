import SectionHeading from "./SectionHeading.jsx";
import CourseCard from "./CourseCard.jsx";
import courses from "../data/courses.js";

function Courses() {
  return (
    <section id="courses" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Structured programs for every stage of preparation"
          subtitle="From first-attempt foundations to mains-level answer writing, each course is built around a clear syllabus and a fixed evaluation rhythm."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
