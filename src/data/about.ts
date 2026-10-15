// The About section. Taken from Ben's résumé (October 2026). Edit here, not in the page.
// Contact details (phone, email, home town) are deliberately left out of the site.

export const intro: string[] = [
  "I'm a computer science student at Concordia University Wisconsin, finishing two degrees in May 2027: one in cybersecurity and one in artificial intelligence and robotics. I'm president of the CS Hackathon Club, and as a teaching assistant I've lectured master's-level courses on AI, scripting languages, and the ethical use of LLMs.",
  "I build agentic AI workflows, full-stack apps, and RAG-backed systems. My senior capstone uses teams of AI agents to plan disaster response on real street maps, and on my own time I build offline-first mobile apps and games with computer opponents. I like software that works without fuss, and comes with tests that prove it.",
  "I'm looking for a full-time role in AI, data analytics, or machine learning engineering.",
];

export interface FactItem {
  title: string;
  detail?: string;
  when?: string;
}

export interface FactGroup {
  heading: string;
  items: FactItem[];
}

export const facts: FactGroup[] = [
  {
    heading: "Experience",
    items: [
      {
        title: "Computer Science Teaching Assistant",
        detail: "Concordia University Wisconsin. Lecture master's-level courses on AI, scripting, and ethical LLM use; write course material for Python, C++, and Java.",
        when: "Feb 2024 – present",
      },
      {
        title: "Computer Science Student Worker",
        detail: "Concordia University Wisconsin, CS Department. Led a VR home-safety project that trains physical therapy students to spot fall hazards; kept department hardware and networks running.",
        when: "Aug 2024 – Jun 2026",
      },
    ],
  },
  {
    heading: "Education",
    items: [
      {
        title: "B.S. Computer Science: Cybersecurity",
        detail: "Concordia University Wisconsin",
        when: "Expected May 2027",
      },
      {
        title: "B.S. Computer Science: Artificial Intelligence & Robotics",
        detail: "Concordia University Wisconsin",
        when: "Expected May 2027",
      },
      { title: "Dean's List", detail: "Carl Sandburg College" },
    ],
  },
  {
    heading: "Skills",
    items: [
      { title: "Languages", detail: "Python, JavaScript / TypeScript, C++, Java, C#, Kotlin, SQL" },
      { title: "Frameworks & tools", detail: "React, React Native / Expo, Node.js / Express, FastAPI, Vite, Git" },
      { title: "AI & data", detail: "AI agents and agentic workflows, LLM integration, RAG / vector search, local LLMs" },
      { title: "Cloud & backend", detail: "Cloudflare Workers / Durable Objects, PostgreSQL, SQLite, WebSockets, REST APIs" },
    ],
  },
  {
    heading: "Leadership & more",
    items: [
      { title: "President, CS Hackathon Club", detail: "Concordia University Wisconsin" },
      { title: "Ultimate Frisbee club", detail: "Treasurer (2025 – present); team captain (2024 – 2025)" },
      { title: "Languages", detail: "English (native), German (beginner)" },
    ],
  },
];
