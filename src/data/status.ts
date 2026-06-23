export const statusItems = [
  {
    label: "EDU",
    title: "Purdue CS student",
    description: "Studying computer science with a machine intelligence focus and biology minor.",
    signal: "ONLINE",
  },
  {
    label: "FOUNDING",
    title: "LuntraHub founder",
    description: "Building a campus tutor discovery and student connection platform.",
    signal: "SHIPPING",
  },
  {
    label: "BUILD",
    title: "ML and robotics builder",
    description: "Working across model adaptation, computer vision, localization, and autonomy.",
    signal: "ITERATING",
  },
  {
    label: "WRITING",
    title: "Latest writing",
    description: "Publishing notes from software projects, robotics systems, and AI experiments.",
    signal: "LOGGING",
  },
];

export type StatusItem = (typeof statusItems)[number];
