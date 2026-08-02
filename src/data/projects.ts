type LiquidSymbol = "mendr" | "graph" | "spiral" | "embed" | "overlay" | "attendance" | "asl" | "people" | "tideline" | "cascade";

interface Project {
	title: string;
	date?: string;
	techStack: string;
	mark: {
		symbol: LiquidSymbol;
		colors: [string, string, string];
		seed: number;
	};
	description: string;
	ctaText: string;
	ctaLink: string;
}

export const projects: Project[] = [
	{
		title: "Cascade",
		date: "2026 August 2",
		techStack: "TypeScript • Node.js • MCP • Claude Code • Codex CLI",
		mark: {
			symbol: "cascade",
			colors: ["#f97316", "#a855f7", "#0ea5e9"],
			seed: 10,
		},
		description: "Cascade decomposes a task into a live dependency graph and executes it with parallel Claude Code and Codex CLI agents. An MCP server plans the subtasks, tracks each node's status as it runs, and fans work out across agents that can execute concurrently once their dependencies clear, so complex work finishes as a graph instead of a single long-running thread.",
		ctaText: "View Project",
		ctaLink: "https://pepps233.github.io/cascade-landing/",
	},
	{
		title: "Tideline",
		date: "2026 July 9",
		techStack: "TypeScript • Node.js • SQLite • MCP",
		mark: {
			symbol: "tideline",
			colors: ["#0ea5e9", "#14b8a6", "#6366f1"],
			seed: 9,
		},
		description: "Tideline keeps coding-agent context useful across long sessions. It stores transcripts and exact source items in SQLite, compresses older turns into reversible context blocks, and exposes read-only MCP tools for assembling the right working context when it is needed. Codex hooks and a setup CLI make capture and installation part of the normal workflow.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/tideline",
	},
	{
		title: "Mendr",
		date: "2026 June 28",
		techStack: "TypeScript • Node.js • GitHub CLI • Vitest",
		mark: {
			symbol: "mendr",
			colors: ["#ff5f6d", "#ffc371", "#8b5cf6"],
			seed: 1,
		},
		description: "mendr keeps pull request review moving after you leave the terminal. Point it at a PR and it coordinates short-lived Codex or Claude Code workers to find scoped issues, apply and validate fixes, and repeat until the review is clean or reaches its round limit. Progress stays inspectable from the CLI, and the finished run lands as one focused PR report.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/mendr",
	},
	{
		title: "ThinkGraph",
		date: "2026 March 20",
		techStack: "Next.js • FastAPI • React Flow • PostgreSQL • Celery",
		mark: {
			symbol: "graph",
			colors: ["#00c6ff", "#667eea", "#84fab0"],
			seed: 2,
		},
		description: "ThinkGraph turns a dense research paper into a map you can explore. Add an arXiv link or PDF to trace concepts, methods, citations, equations, and reasoning through an interactive knowledge graph, with every node linked back to its source. Graph-aware chat, citation expansion, and multi-paper comparison make it easier to follow an idea across a paper and beyond it.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/think-graph",
	},
	{
		title: "Opiral",
		date: "2026 March 16",
		techStack: "Next.js • FastAPI • Supabase • Pinecone • OpenAI",
		mark: {
			symbol: "spiral",
			colors: ["#ff4ecd", "#ff7b54", "#7f5af0"],
			seed: 3,
		},
		description: "Opiral helps Purdue students find research labs that fit what they already know and what they want to explore. A single resume upload becomes a ranked set of matches across 35+ curated labs, grounded in skills, coursework, research, and projects. Each result also includes a personalized email opening, so students can move from discovery to outreach without creating an account.",
		ctaText: "View Project",
		ctaLink: "https://www.opiral.com/",
	},
	{
		title: "Embed",
		date: "2026 February 14",
		techStack: "React • Vite • FastAPI • IndexedDB • Supabase",
		mark: {
			symbol: "embed",
			colors: ["#2563eb", "#22d3ee", "#6ee7b7"],
			seed: 4,
		},
		description: "Embed keeps reading, annotation, and questions in the same browser workflow. Highlight a web page or PDF, attach notes, and return to them even while offline through local-first storage. Optional cloud sync, semantic search, and LLM answers add deeper recall without making the core reading experience depend on a connection.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/embed",
	},
	{
		title: "Overlay Studio",
		date: "2026 January 7",
		techStack: "Next.js • React • TypeScript • Tailwind CSS • Supabase",
		mark: {
			symbol: "overlay",
			colors: ["#f857a6", "#ffb347", "#ff5e62"],
			seed: 5,
		},
		description: "Overlay Studio is a playful canvas for making LinkedIn banners feel personal. Mix built-in backgrounds, animal overlays, accessories, and your own images with drag-and-drop positioning, layer controls, smart snapping, and live preview. Finished 1584 by 396 designs export directly to PNG or JPEG, with no design software required.",
		ctaText: "View Project",
		ctaLink: "https://pepps233.github.io/OverlayStudio/",
	},
	{
		title: "Attendance Tracker",
		date: "2024 August",
		techStack: "OpenCV • Python • Pandas • Openpyxl",
		mark: {
			symbol: "attendance",
			colors: ["#ff8a00", "#ffd200", "#38d996"],
			seed: 6,
		},
		description: "The Attendance Tracker gives a 35 to 40 member robotics team a quick barcode-based sign-in desk instead of a paper log. A webcam scan records arrival and departure, calculates each student’s session and cumulative hours, and writes the results to an Excel workbook. Live camera feedback, audio cues, and system monitoring keep the kiosk clear and dependable during long team sessions.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/2204-Attendance-",
	},
	{
		title: "ASL Alphabet Translator",
		date: "2024 December",
		techStack: "OpenCV • TensorFlow • MediaPipe • pyttsx3",
		mark: {
			symbol: "asl",
			colors: ["#8b5cf6", "#ec4899", "#38bdf8"],
			seed: 7,
		},
		description: "The ASL Alphabet Translator turns live hand signs into a message you can see and hear. It recognizes alphabet gestures through the webcam, lets the signer add or remove letters as a phrase takes shape, and reads the completed text aloud. Simple keyboard controls keep composing, clearing, and speaking the message close at hand.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/Sign-Language-Translator",
	},
	{
		title: "Employee Management API",
		date: "2025 August",
		techStack: "Spring Boot • Java • Spring Data JPA • Docker • PostgreSQL",
		mark: {
			symbol: "people",
			colors: ["#00b09b", "#96c93d", "#20bdff"],
			seed: 8,
		},
		description: "The Employee Management API gives teams a predictable home for employee records. Its REST endpoints cover the complete record lifecycle, from adding and finding employees to updating details and removing outdated entries. PostgreSQL persistence and clear error responses keep integrations consistent, while a containerized database makes the service straightforward to run anywhere.",
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/Employee-Management-System",
	},
];
