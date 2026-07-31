import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end only: wire this up to your form/email backend of choice.
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="bg-paper-dim py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to our admissions team"
          subtitle="Have a question about a course, batch timing, or fee structure? Send us a note and we'll respond within one working day."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-hairline bg-white p-7 shadow-card lg:col-span-3"
            noValidate
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border border-hairline px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border border-hairline px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="resize-none rounded-lg border border-hairline px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                placeholder="Tell us what you'd like help with"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-gold"
            >
              Send Message
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`text-sm text-gold-deep transition-opacity ${
                submitted ? "opacity-100" : "opacity-0"
              }`}
            >
              Thanks — your message has been noted. We'll be in touch shortly.
            </p>
          </form>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-2xl border border-hairline bg-white p-7 shadow-soft">
              <ul className="flex flex-col gap-4 text-sm text-slate">
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-gold" /> admissions@judiciarygold.in
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gold" /> +91 98765 43210
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 text-gold" />
                  <span>
                    Judiciary Gold Learning Center, Civil Lines, New Delhi, India
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="flex min-h-[180px] flex-1 items-center justify-center rounded-2xl border border-dashed border-hairline bg-white text-sm text-slate"
              role="img"
              aria-label="Map placeholder showing office location"
            >
              <div className="flex flex-col items-center gap-2">
                <FaMapMarkerAlt className="text-gold" size={22} />
                Google Map integration placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
