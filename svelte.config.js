import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extension: '.md'
		})
	],

	kit: {
		adapter: adapter({
			out: 'build',
			precompress: true,
			envPrefix: ''
		})
	},

	extensions: ['.svelte', '.md']
};

export default config;
