const documents: Record<string, MarkdownModule> = import.meta.glob(
	'../../../content/package_name/**/*.md',
	{ eager: true }
);

type MarkdownModule = {
	metadata: Record<string, object>;
	default: {
		render: () => { html: string; css: { code: string }; head: string };
		[key: symbol]: string;
	};
};

export async function load({ params }) {
	const slug = params.slug.replace(/\/$/, '').replace('docs/', '');

	const markdown = Object.entries(documents).find(([path]) => {
		const fileSlug = path.replace('../../../content/package_name/', '').replace('.md', '');
		return fileSlug === slug;
	});

	//Si le post n'existe pas, retourner une 404
	if (!markdown) {
		return { status: 404, error: new Error(`Post introuvable : ${slug}`) };
	}

	const module = markdown[1];
	const metadata = module.metadata;

	console.log('markdown', module);
	return {
		metadata,
		Page: module.default as unknown as ConstructorOfATypedSvelteComponent
	};
}
