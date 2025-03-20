import { separateFrontmatter } from '$lib/utils/frontmatter';

const documentsRaw = import.meta.glob('../../content/package_name/**/*.md', {
	eager: true,
	query: '?raw'
});

export const documentation_pages = () => {
	return Object.entries(documentsRaw)
		.map(([path, module]) => {
			const slug = path.replace('../../content/package_name/', '').replace('.md', '');
			const markdown = module as MarkdownModule;

			const { frontmatter } = separateFrontmatter(markdown.default);
			return {
				slug: slug,
				metadata: frontmatter
			};
		})
		.filter(Boolean);
};

type MarkdownModule = {
	default: string;
};
