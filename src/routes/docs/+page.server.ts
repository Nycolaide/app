import { documentation_pages } from '$lib/server/content';

export async function load() {
	const pages = documentation_pages();
	return { pages };
}
