import { getEmDashCollection, getEmDashEntry } from "emdash";

// EmDash generates precise collection types from seed/seed.json when the
// development server starts. Keep this adapter flexible while that happens.
const queryCollection = getEmDashCollection as (...args: any[]) => Promise<any>;
const queryEntry = getEmDashEntry as (...args: any[]) => Promise<any>;

export async function entries(collection: string, options: Record<string, unknown> = {}) {
	const result = await queryCollection(collection, options);
	if (result.error) throw result.error;
	return result.entries as any[];
}

export async function pageContent(slug: string) {
	const result = await queryEntry("pages", slug);
	if (result.error) throw result.error;
	return result.entry?.data ?? null;
}

export async function profileContent() {
	return (await entries("profile", { limit: 1 }))[0]?.data ?? null;
}

export async function interfaceCopy() {
	return (await entries("site_copy", { limit: 1 }))[0]?.data.values ?? {};
}
