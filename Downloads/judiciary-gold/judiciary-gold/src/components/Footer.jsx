import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Seal from "./Seal.jsx";
import courses from "../data/courses.js";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
];

function Footer() {
  return (
    <footer className="bg-ink ledger-texture text-paper-dim/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Seal className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-paper">
                Judiciary <span className="text-gold">Gold</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Structured mentorship for judicial services aspirants, built by
              faculty who have sat on the bench and graded the papers.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper">
              Courses
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {courses.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="transition-colors hover:text-gold">
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line transition-colors hover:border-gold hover:text-gold"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Judiciary Gold. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
