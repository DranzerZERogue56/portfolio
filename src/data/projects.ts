// All project content lives here. To change a card, edit its entry.
// Only add a `repo` link when the GitHub repo is public — private repos get no link.
// `repoNote` is optional: a short line shown where the code link would be, to say
// why there isn't one (e.g. "Private repo"). Leave it out to show nothing.

export interface Project {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  repoNote?: string;
  demo?: string;
  demoLabel?: string;
  note?: string;
  comingSoon?: boolean;
}

const gh = (name: string) => `https://github.com/DranzerZERogue56/${name}`;

export const featured: Project[] = [
  {
    title: "Claude Fleet",
    summary:
      "A local dashboard that runs and coordinates many Claude Code AI agents at once — saved agent profiles, a work queue, and multi-step pipelines that hand work from one agent to the next.",
    tags: ["TypeScript", "Node.js", "Claude Agent SDK", "SQLite", "Multi-agent"],
  },
  {
    title: "Disaster Response Coordination",
    summary:
      "Senior capstone. Describe a disaster in plain English; AI agents for medical, fire, shelter, and security build responder teams on real street maps, compare team sizes, and write up the best plan as a report.",
    tags: ["Python", "Multi-agent AI", "Local LLM (Ollama)", "Mesa", "OSMnx"],
    repo: gh("disaster-response-coordination"),
    demo: "https://dranzerzerogue56.github.io/disaster-response-coordination/",
    demoLabel: "Live dashboard",
  },
  {
    title: "DayFeed",
    summary:
      "An offline-first notes app: a chat-style feed plus a day-by-day notebook, with photo and voice notes, on-device transcription, and an agenda that picks up dates automatically. Backed by 214 automated tests.",
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "Jest"],
    repo: gh("DayFeed"),
    note: "Heading to Google Play",
  },
  {
    title: "Hollowdeep",
    summary:
      "A turn-based pixel-art dungeon crawler for phones, played in portrait, with animated creatures per biome and a tap-to-expand minimap.",
    tags: ["Godot 4", "GDScript", "Android", "Roguelike"],
  },
  {
    title: "Tak",
    summary:
      "The board game Tak against a computer opponent, fully offline on mobile. A standalone rules engine with game-notation support, plus an AI that searches ahead to pick its moves.",
    tags: ["React Native", "Expo", "TypeScript", "Game AI", "Jest"],
    repo: gh("Tak-tical"),
  },
  {
    title: "Red vs Blue",
    summary:
      "A security training tool where an AI red team attacks and an AI blue team defends an isolated target. Being spun out as my next big project.",
    tags: ["AI agents", "Security", "Docker"],
    comingSoon: true,
  },
];

export const more: Project[] = [
  {
    title: "Homeworlds",
    summary: "The space strategy game Binary Homeworlds against an AI opponent, offline on mobile.",
    tags: ["React Native", "Expo", "Game AI"],
    repo: gh("homeworlds"),
  },
  {
    title: "Quickmath",
    summary:
      "A mental-math trainer that drills specific tricks and spaces out reviews based on your own speed and accuracy.",
    tags: ["React Native", "Expo", "SQLite"],
  },
  {
    title: "Musical Magician",
    summary:
      "An offline desktop app for learning to read sheet music, aimed at organ players — lessons plus quick replayable drills.",
    tags: ["Electron", "React", "VexFlow", "Tone.js"],
  },
  {
    title: "Knight's Codex",
    summary: "A medieval-themed stretching and recovery app with quests, ranks, and streaks.",
    tags: ["React", "Vite", "PWA", "Vitest"],
  },
  {
    title: "Brain",
    summary:
      "A local web app for a plain-markdown notes vault, shared live with Obsidian and protected against overwriting outside edits.",
    tags: ["React", "Express", "Markdown"],
  },
  {
    title: "Kunes Overlay",
    summary:
      "A clean, ad-free view of a car dealer's inventory, plus a price checker that compares listings against other dealers.",
    tags: ["Node.js", "Algolia", "Puppeteer"],
  },
  {
    title: "canvas-HW",
    summary:
      "A read-only planning dashboard that pulls assignments and due dates from Canvas into a list and two-week calendar.",
    tags: ["Canvas API", "SQLite"],
  },
  {
    title: "REE-Rolo",
    summary:
      "An Android app that tracks incoming messages and keeps nudging you until you reply.",
    tags: ["Android", "Notifications", "Widgets"],
  },
  {
    title: "PiP Roleplay",
    summary:
      "A voice-based sales-call trainer with push-to-talk and AI grading against a fixed scoring rubric.",
    tags: ["TypeScript", "Claude Agent SDK", "Voice"],
  },
  {
    title: "Church Contacts",
    summary:
      "Builds a list of nearby churches from open map data for one-at-a-time outreach, with a keyboard-driven spreadsheet viewer.",
    tags: ["Python", "OpenStreetMap"],
  },
  {
    title: "Amazon Wishlist Extractor",
    summary:
      "A browser userscript that exports a gift registry, plus a local page for tagging, filtering, and notes.",
    tags: ["JavaScript", "Tampermonkey", "jsdom"],
  },
  {
    title: "Futuristic UI Mockups",
    summary: "Hand-rebuilt HTML and SVG versions of a sci-fi interface design kit.",
    tags: ["HTML", "CSS", "SVG"],
    repo: gh("Figma-UII"),
  },
  {
    title: "Quick Decide",
    summary: "A small local AI model that judges whether a shell command is safe to run without asking.",
    tags: ["Local LLM", "AI safety"],
  },
];
