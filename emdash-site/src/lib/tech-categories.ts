type TechnologyCategory = { id: string; name: string; techs: string[] };

const fallbackCategory: Record<string, string> = {
	jotai: "frontend",
	"google maps api": "visualization",
	"google places api": "visualization",
	openai: "ai",
};

const fallbackNames: Record<string, string> = {
	frontend: "Frontend",
	visualization: "Visualization",
	ai: "AI & ML",
};

export function usedTechnologyCategories(
	categories: TechnologyCategory[],
	projects: Array<{ data?: { technologies?: unknown } }>,
) {
	const used = new Map<string, string>();
	for (const project of projects) {
		if (!Array.isArray(project.data?.technologies)) continue;
		for (const value of project.data.technologies) {
			if (typeof value === "string" && value.trim()) used.set(value.toLowerCase(), value);
		}
	}

	const cleaned = categories.map((category) => ({
		...category,
		techs: (category.techs || []).filter((tech) => used.has(tech.toLowerCase())),
	}));
	const assigned = new Set(cleaned.flatMap((category) => category.techs.map((tech) => tech.toLowerCase())));

	for (const [key, tech] of used) {
		if (assigned.has(key)) continue;
		const id = fallbackCategory[key] || "other";
		let category = cleaned.find((candidate) => candidate.id === id);
		if (!category) {
			category = { id, name: fallbackNames[id] || "Other", techs: [] };
			cleaned.push(category);
		}
		category.techs.push(tech);
	}

	return cleaned.filter((category) => category.techs.length > 0);
}
