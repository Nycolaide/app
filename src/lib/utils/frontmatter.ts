import { parse } from 'yaml';

export const separateFrontmatter = (markdown: string) => {
	if (typeof markdown !== 'string') {
		throw new TypeError('Expected markdown to be a string');
	}
	const frontmatterStartIndex = markdown.indexOf('---') + 3;
	const frontmatterEndIndex = markdown.indexOf('---', frontmatterStartIndex);

	if (frontmatterStartIndex !== -1 && frontmatterEndIndex !== -1) {
		const parsedFrontmatter = parse(markdown.slice(frontmatterStartIndex, frontmatterEndIndex));

		return {
			frontmatter: parsedFrontmatter,
			markdownBody: markdown.slice(frontmatterEndIndex + 3).trim()
		};
	}

	return {
		frontmatter: null,
		markdownBody: markdown
	};
};
