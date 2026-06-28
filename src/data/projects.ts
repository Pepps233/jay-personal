import GitIcon from '../assets/logos/Git-logo.svg?raw';
import N8nIcon from '../assets/logos/N8n-logo.svg?raw';
import PostgresIcon from '../assets/logos/Postgres-logo.svg?raw';
import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import PythonIcon from '../assets/logos/Python-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';


export const projects = [
	{
		title: "mendr",
		date: "2026 June 28",
		techStack: "TypeScript • Node.js • GitHub CLI • Vitest",
		description: [
			"Built an autonomous PR code-review CLI that orchestrates Codex or Claude Code workers through local subscriptions without collecting provider API keys.",
			"Designed a deterministic review, fix, and validation loop that can scan a pull request, push targeted fixes, and repeat until the PR is clean or the round cap is reached.",
			"Implemented file-backed daemon state so users can close the original terminal, list active reviews, and inspect progress from the CLI.",
			"Added structured final report generation that posts one concise pull request summary instead of scattering review noise across the PR.",
		],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/mendr",
		icon: GitIcon
	},
	{
		title: "ThinkGraph",
		date: "2026 March 20",
		techStack: "Next.js • FastAPI • React Flow • PostgreSQL • Celery",
		description: [
			"Built an AI research-paper workspace that turns arXiv links or uploaded PDFs into interactive knowledge graphs.",
			"Implemented a FastAPI extraction pipeline that parses paper content, identifies entities and relationships, and stores graph-ready outputs.",
			"Created a Next.js graph viewer with zooming, panning, expandable nodes, source provenance, and node detail panels for paper exploration.",
			"Added async job processing with Celery and Redis so ingestion can stream progress while longer PDF and graph tasks run in the background.",
		],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/think-graph",
		icon: PostgresIcon
	},
	{
		title: "Opiral",
		date: "2026 March 16",
		techStack: "Next.js • FastAPI • Supabase • Pinecone • OpenAI",
		description: [
			"Built a Purdue research-lab matching app that parses student resumes and recommends labs aligned with skills, coursework, research, and projects.",
			"Used GPT-4o resume extraction with OpenAI embeddings and Pinecone vector search to rank relevant labs from a curated Purdue dataset.",
			"Generated personalized outreach email openings for each match while keeping the flow login-free and guarded by per-session rate limits.",
			"Deployed a split frontend and backend architecture with Vercel, FastAPI, Supabase, Pinecone, and Upstash Redis.",
		],
		ctaText: "View Project",
		ctaLink: "https://www.opiral.com/",
		icon: SupabaseIcon
	},
	{
		title: "Embed",
		date: "2026 February 14",
		techStack: "React • Vite • FastAPI • IndexedDB • Supabase",
		description: [
			"Built a browser-based knowledge companion for highlighting, annotating, and asking questions about web pages and PDFs.",
			"Implemented a Manifest V3 extension with React, Vite, PDF.js, and local-first IndexedDB storage through Dexie.",
			"Designed a hybrid local-cloud architecture that keeps annotations available offline while supporting vector search and LLM-powered answers through a FastAPI backend.",
			"Added typed shared schemas, backend API boundaries, and separate CI checks for the extension and service layers.",
		],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/embed-ai",
		icon: SupabaseIcon
	},
	{
		title: "Overlay Studio",
		date: "2026 January 7",
		techStack: "Next.js • React • TypeScript • Tailwind CSS • Supabase",
		description: [
			"Built a LinkedIn banner generator with a drag-and-drop canvas for composing custom backgrounds, overlays, and accessories.",
			"Implemented upload, layer management, resizing, rotation, aspect-ratio locking, and real-time preview controls for banner editing.",
			"Added PNG and JPEG export options so users can download finished 1584 by 396 banner assets directly from the browser.",
			"Integrated optional Supabase analytics while keeping the editor usable as a client-first creative tool.",
		],
		ctaText: "View Project",
		ctaLink: "https://pepps233.github.io/OverlayStudio/",
		icon: TailwindIcon
	},
	{
		title: "Barcode scanning Attendance Tracker",
		date: "2024 August",
		techStack: "OpenCV • Python • Pandas • Openpyxl",
		description: [
            "Designed and developed a barcode scanning sign-in/out system using Python, OpenCV, and Pyzbar to track attendance for a 35–40 member robotics team.",
            "Automated attendance logging into Excel spreadsheets with Pandas and OpenPyXL, including sign-in, sign-out, and hours calculation per student.",
            "Built a time-tracking module to calculate session durations and accumulated hours per student.",
            "Implemented real-time performance monitoring (CPU/memory usage) with psutil for system reliability during continuous use.",
            "Enhanced user experience with audio feedback on successful or failed scans and real-time webcam display of scanned results.",
            "Delivered a low-cost, efficient alternative to manual attendance tracking, reducing errors and improving student accountability.",
		],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/2204-Attendance-",
		icon: PythonIcon
	},
	{
		title: "Real-time American Sign Language (ASL) Alphabet Translator",
		date: "2024 December",
		techStack: "OpenCV • TensorFlow • MediaPipe • pyttsx3",
        description: [
            "Built a real-time ASL translation system using Python, OpenCV, and cvzone to detect hand gestures and classify them into ASL letters.",
            "Integrated a Keras deep learning model to achieve accurate classification of alphabet signs from live webcam input.",
            "Implemented image preprocessing techniques (cropping, resizing, normalization) to improve model performance under varying lighting and angles.",
            "Added text-to-speech functionality (pyttsx3) to convert recognized signs into spoken language for seamless communication.",
        ],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/Sign-Language-Translator",
		icon: PythonIcon
	},
	{
		title: "Employee-Management API (Backend)",
		date: "2025 August",
		techStack: "Spring Boot • Java • Spring Data JPA • Docker • PostgreSQL",
        description: [
            "Developed a RESTful backend service using Java, Spring Boot, and PostgreSQL to manage employee data with CRUD functions.",
            "Containerized the PostgreSQL database with Docker, simplifying setup and improving deployment consistency.",
            "Integrated Spring Data JPA/Hibernate for seamless persistence, automatic schema updates, and efficient query handling.",
            "Addressed the challenge of unreliable manual employee record management by providing a scalable, automated solution with reliable database-backed APIs.",
            "Implemented a layered architecture (Controller → Service → Repository) with DTO mapping to ensure clean separation of concerns and maintainable code.",
        ],
		ctaText: "View Project",
		ctaLink: "https://github.com/Pepps233/Employee-Management-System",
		icon: N8nIcon
	},
];
