import {
  FaBalanceScale,
  FaGavel,
  FaBookOpen,
  FaLandmark,
  FaFileContract,
  FaUserTie,
} from "react-icons/fa";

/**
 * Sample course catalogue for Judiciary Gold.
 * `icon` replaces a photographic thumbnail with an on-brand mark,
 * keeping every card visually consistent without stock imagery.
 */
const courses = [
  {
    id: "c1",
    icon: FaBalanceScale,
    title: "Civil Judge Foundation",
    description:
      "A ground-up course covering CPC, Evidence Act and civil procedure with weekly answer-writing practice.",
    duration: "10 months",
    mode: "Online + Offline",
  },
  {
    id: "c2",
    icon: FaGavel,
    title: "Judicial Services Mains Intensive",
    description:
      "Mains-focused mentorship with daily law-mixing tests, model answers, and one-on-one script review.",
    duration: "6 months",
    mode: "Online",
  },
  {
    id: "c3",
    icon: FaFileContract,
    title: "Bare Acts Mastery",
    description:
      "Section-by-section coverage of CrPC, IPC and the Constitution, built for quick, durable recall.",
    duration: "4 months",
    mode: "Online",
  },
  {
    id: "c4",
    icon: FaUserTie,
    title: "Interview & Viva Voce Lab",
    description:
      "Mock interview panels with sitting and retired judicial officers, plus personality and current-affairs prep.",
    duration: "6 weeks",
    mode: "Offline",
  },
  {
    id: "c5",
    icon: FaLandmark,
    title: "Constitutional Law Deep Dive",
    description:
      "Doctrine-first study of landmark judgments with case-briefing drills for both prelims and mains.",
    duration: "3 months",
    mode: "Online + Offline",
  },
  {
    id: "c6",
    icon: FaBookOpen,
    title: "Prelims Test Series",
    description:
      "52 full-length papers benchmarked to the latest exam pattern, with topic-wise performance analytics.",
    duration: "8 months",
    mode: "Online",
  },
];

export default courses;
