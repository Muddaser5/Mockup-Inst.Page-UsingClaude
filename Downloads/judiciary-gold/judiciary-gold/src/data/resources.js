import {
  FaStickyNote,
  FaClipboardCheck,
  FaHistory,
  FaNewspaper,
  FaBrain,
} from "react-icons/fa";

const resources = [
  {
    id: "r1",
    icon: FaStickyNote,
    title: "Structured Notes",
    description: "Section-wise notes condensed from bare acts and standard commentaries.",
  },
  {
    id: "r2",
    icon: FaClipboardCheck,
    title: "Mock Tests",
    description: "Full-length and sectional tests benchmarked to the latest exam pattern.",
  },
  {
    id: "r3",
    icon: FaHistory,
    title: "Previous Year Papers",
    description: "A decade of solved papers with examiner-style model answers.",
  },
  {
    id: "r4",
    icon: FaNewspaper,
    title: "Current Affairs",
    description: "Weekly legal and judicial current-affairs briefings, exam-focused.",
  },
  {
    id: "r5",
    icon: FaBrain,
    title: "Daily Quizzes",
    description: "Short daily quizzes to keep recall sharp between full revisions.",
  },
];

export default resources;
