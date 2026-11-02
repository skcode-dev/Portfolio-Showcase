import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const source = async (path) => JSON.parse(await readFile(resolve(root, path), "utf8"));

const [projects, profile, techCategories, careerSkills] = await Promise.all([
	source("src/data/projects.json"),
	source("src/data/profile.json"),
		source("src/data/techCategories.json"),
	source("emdash-site/src/data/careerSkills.json"),
]);

const pages = [
	{ id: "home", section: "Home", title: "skCode", description: profile.bio },
	{ id: "portfolio", section: "Portfolio", title: "Projects", description: "Selected web applications and experiments." },
	{ id: "places", section: "Japan", title: "Places I've Visited", description: "A record of the prefectures I've explored." },
	{ id: "destinations", section: "Around the World", title: "Places I've Visited", description: "A timeline of the places I've traveled abroad." },
	{ id: "cars", section: "Cars", title: "Cars I've Owned", description: "A short history of the cars I've driven." },
	{ id: "running", section: "Running", title: "Race Results", description: "Personal bests and race history.", hero_image: "/images/running/running-shoes.jpg" },
];

const cars = [
	{ make: "Lexus", model: "NX 350h F SPORT", years: "2024–", number: "03", image: "/images/cars/lexus-nx.jpeg", alt: "Black Lexus NX 350h F SPORT by the water under a blue sky", position: "center bottom" },
	{ make: "Toyota", model: "FJ Cruiser", years: "2017–2024", number: "02", image: "/images/cars/fj-cruiser.jpg", alt: "Beige Toyota FJ Cruiser photographed from the front" },
	{ make: "Toyota", model: "Celica", years: "2013–2017", number: "01", image: "/images/cars/celica.jpg", alt: "White Toyota Celica parked outdoors" },
];

const destinations = [
	{ label: "As a child", year: "", places: [{ name: "Guam", cities: "" }, { name: "Saipan", cities: "" }] },
	{ label: "2011", year: "2011", places: [{ name: "China", cities: "Tianjin · Beijing" }] },
	{ label: "2015", year: "2015", places: [{ name: "Thailand", cities: "Bangkok · Phuket" }] },
	{ label: "2017", year: "2017", places: [{ name: "Hawaii", cities: "Oahu" }] },
	{ label: "2018", year: "2018", places: [{ name: "Singapore", cities: "" }, { name: "South Korea", cities: "Seoul" }] },
	{ label: "2024", year: "2024", places: [{ name: "Vietnam", cities: "Da Nang · Hoi An" }] },
];

const prefectureSource = await readFile(resolve(root, "src/data/visitedPrefectures.ts"), "utf8");
const objectFrom = (name) => {
	const match = prefectureSource.match(new RegExp(`export const ${name}[^=]*= \\{([\\s\\S]*?)\\n\\};`));
	return Object.fromEntries([...match[1].matchAll(/"(\d{2})":\s*(\d+|"[^"]+")/g)].map(([, key, value]) => [key, value.startsWith('"') ? value.slice(1, -1) : Number(value)]));
};
const prefectureScores = objectFrom("prefectureScores");
const prefectureNames = objectFrom("prefectureNames");
const colors = ["#d9d6e5", "#8bc9e8", "#91d49a", "#f4d46f", "#f4ad91", "#f0b2c8"];
const descriptions = [
	["On my list", "A place to visit someday"],
	["In transit", "Crossed through on the way"],
	["Quick stop", "Set foot there briefly"],
	["Explored", "Had time to look around"],
	["Overnight", "Spent at least one night"],
	["Home turf", "A place I called home"],
];
const running = [
	{ distance: "10 km", time: "37:16", event: "Toyota Marathon", date: "2015-11-15" },
	{ distance: "Full Marathon", time: "3:28:53", event: "Kurobe Meisui Marathon", date: "2019-05-26" },
];

const media = (path, alt) => ({ $media: { url: `https://portfolio-showcase-qarp.vercel.app${path}`, filename: path.split("/").at(-1), alt } });
const fields = {
	pages: [
		{ slug: "section", label: "Section label", type: "string" },
		{ slug: "title", label: "Page title", type: "string", required: true, searchable: true },
		{ slug: "description", label: "Description", type: "text" },
		{ slug: "body", label: "Page content", type: "portableText", searchable: true },
		{ slug: "hero_image", label: "Hero image", type: "image" },
	],
	projects: [
		{ slug: "title", label: "Title", type: "string", required: true, searchable: true },
		{ slug: "legacy_id", label: "Existing project URL ID", type: "string", required: true },
		{ slug: "description", label: "Description", type: "text", searchable: true },
		{ slug: "technologies", label: "Technologies (JSON list)", type: "json" },
		{ slug: "image", label: "Project image", type: "image" },
		{ slug: "project_date", label: "Created date", type: "datetime" },
		{ slug: "display_order", label: "Display order", type: "integer" },
	],
	profile: [
		{ slug: "name", label: "Name", type: "string", required: true },
		{ slug: "bio", label: "Bio / profile introduction", type: "text" },
		{ slug: "avatar", label: "Profile image", type: "image" },
		{ slug: "experience", label: "Experience (JSON)", type: "json" },
		{ slug: "career_milestones", label: "Career timeline (JSON)", type: "json" },
		{ slug: "automotive_experience", label: "Automotive experience detail (JSON)", type: "json" },
		{ slug: "certifications", label: "Certifications (JSON)", type: "json" },
		{ slug: "social", label: "Social links (JSON)", type: "json" },
		{ slug: "tech_categories", label: "Skills and categories (JSON)", type: "json" },
	],
	cars: [
		{ slug: "make", label: "Make", type: "string" }, { slug: "model", label: "Model", type: "string", required: true },
		{ slug: "years", label: "Years", type: "string" }, { slug: "number", label: "Display number", type: "string" },
		{ slug: "image", label: "Image", type: "image" }, { slug: "image_position", label: "Image position", type: "string" },
	],
	destinations: [
		{ slug: "label", label: "Timeline label", type: "string", required: true }, { slug: "year", label: "Date value", type: "string" },
		{ slug: "places", label: "Places (JSON)", type: "json" }, { slug: "display_order", label: "Display order", type: "integer" },
	],
	prefectures: [
		{ slug: "code", label: "Prefecture code", type: "string", required: true }, { slug: "name", label: "Name", type: "string", required: true },
		{ slug: "score", label: "Travel score (0–5)", type: "integer", required: true }, { slug: "color", label: "Color", type: "string" },
	],
	running_results: [
		{ slug: "distance", label: "Distance", type: "string", required: true }, { slug: "time", label: "Time", type: "string", required: true },
		{ slug: "event", label: "Event", type: "string" }, { slug: "date", label: "Date", type: "datetime" },
	],
	site_copy: [
		{ slug: "values", label: "Interface labels and page microcopy (JSON)", type: "json" },
	],
};

const collections = Object.entries(fields).map(([slug, definition]) => ({
	slug,
	label: ({ pages: "Page content", profile: "Profile", projects: "Projects", cars: "Cars", destinations: "Travel destinations", prefectures: "Japan prefectures", running_results: "Running results", site_copy: "Interface copy" })[slug],
	labelSingular: ({ pages: "Page", profile: "Profile", projects: "Project", cars: "Car", destinations: "Destination", prefectures: "Prefecture", running_results: "Running result", site_copy: "Copy set" })[slug],
	routable: false,
	supports: ["drafts", "revisions", "search", "seo"],
	fields: definition,
}));

const uiCopy = {
	projectList: "Projects", projectDetail: "Project Overview", technologies: "Technologies", created: "Created",
	backToProjects: "Back to Projects", projectNotFound: "Project not found", noProjects: "No projects yet.",
	filterByTechnology: "Filter by technology", clearFilters: "Clear filters", travelScale: "Travel scale",
	homeTurf: descriptions[5][0], overnight: descriptions[4][0], explored: descriptions[3][0], quickStop: descriptions[2][0], inTransit: descriptions[1][0], onMyList: descriptions[0][0],
	experience: "Experience", certifications: "Certifications", skills: "Skills", cars: "Cars I've Owned", runningResults: "Race Results",
	lightTheme: "Light", darkTheme: "Dark", systemTheme: "System", menuLabel: "Main navigation", footerCopyright: "© skCode. All Rights Reserved.",
	homeLabel: "Home", themeLabel: "Theme", runningTimeLabel: "Running times", viewProject: "View Project",
	notFoundTitle: "Page not found", notFoundDescription: "The page you're looking for doesn't exist or has been moved.", homeLink: "Go home", portfolioLink: "View projects", mapLabel: "Map of Japan with travel scores",
	aboutMe: "About Me", careerJourney: "Career Journey", careerIntro: "From automotive development to web application development", exploreExperience: "Explore experience", exploreSkills: "Explore skills", allProjects: "All projects", travelMapAttribution: "Map data by Geolonia", travelMapLicense: "License: GFDL",
	scoreDescriptions: descriptions.map(([title, detail], score) => ({ score, title, detail })),
};

const content = {
	pages: pages.map((page) => ({ id: page.id, slug: page.id, status: "published", data: { section: page.section, title: page.title, description: page.description, ...(page.hero_image ? { hero_image: media(page.hero_image, page.title) } : {}) } })),
	profile: [{ id: "main-profile", slug: "main-profile", status: "published", data: {
		name: profile.name, bio: profile.bio, avatar: media("/images/icon.png", "skCode portfolio avatar"), experience: profile.experience,
		career_milestones: [
			{ period: "2012 — 2024", title: "Automotive Development Engineer", description: "12 years of experience in automotive development.", marker: "01" },
			{ period: "2025 —", title: "Web Application Developer", description: "Building web applications with a focus on frontend technologies like React and Next.js.", marker: "02" },
		],
		automotive_experience: [
			{ area: "Production line", category: "Production", items: ["6 months"] },
			{ area: "Engine development", category: "Development", items: ["Engine assembly", "Engine bench evaluation"] },
			{ area: "Vehicle evaluation", category: "Development", items: ["Test course", "Chassis dynamometer"] },
			{ area: "Development support", category: "Development", items: ["Equipment introduction and upgrades", "Development support tool development"] },
		],
		certifications: profile.certifications, social: profile.social, tech_categories: [...techCategories.categories, { id: "career-skills", name: "Web Engineering Skills", skill_groups: careerSkills }],
	} }],
	projects: projects.projects.map((project, index) => ({
		id: `project-${project.id}`, slug: `project-${project.id}`, status: "published", data: {
			title: project.title, legacy_id: project.id, description: project.description, technologies: project.technologies,
			image: media(project.image, `${project.title} project image`),
			project_date: `${project.createdAt}T00:00:00.000Z`, display_order: index,
		},
	})),
	cars: cars.map((car) => ({ id: `car-${car.number}`, slug: `car-${car.number}`, status: "published", data: { make: car.make, model: car.model, years: car.years, number: car.number, image_position: car.position || "center", image: media(car.image, car.alt) } })),
	destinations: destinations.map((item, index) => ({ id: `destination-${index + 1}`, slug: `destination-${index + 1}`, status: "published", data: { label: item.label, year: item.year, places: item.places, display_order: index } })),
	prefectures: Object.entries(prefectureNames).map(([code, name]) => ({ id: `prefecture-${code}`, slug: `prefecture-${code}`, status: "published", data: { code, name, score: prefectureScores[code] ?? 0, color: colors[prefectureScores[code] ?? 0] } })),
	running_results: running.map((result, index) => ({ id: `running-${index + 1}`, slug: `running-${index + 1}`, status: "published", data: { ...result, date: `${result.date}T00:00:00.000Z` } })),
	site_copy: [{ id: "main-copy", slug: "main-copy", status: "published", data: { values: uiCopy } }],
};

const menuItems = [
	["Portfolio", "/portfolio"], ["Places", "/places"],
	["Destinations", "/destinations"], ["Cars", "/cars"], ["Running", "/running"],
].map(([label, url]) => ({ type: "custom", label, url }));

const seed = {
	"$schema": "https://emdashcms.com/seed.schema.json",
	version: "1",
	defaultLocale: "en",
	meta: { name: "skCode Portfolio", description: "Personal portfolio and interests", author: "skCode" },
	settings: { title: "skCode", tagline: profile.bio, logo: media("/images/icon.png", "skCode"), timezone: "Asia/Tokyo" },
	collections,
	menus: [{ name: "primary", label: "Main navigation", items: menuItems }],
	content,
};

await writeFile(resolve(import.meta.dirname, "../seed/seed.json"), `${JSON.stringify(seed, null, 2)}\n`);
console.log(`Wrote EmDash seed with ${projects.projects.length} projects, ${pages.length} pages, and ${content.prefectures.length} prefectures.`);
