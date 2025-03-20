<script lang="ts">
	let { data } = $props();
	let { Page, metadata } = $derived(data);
</script>

<svelte:head>
	<title>{metadata?.title}</title>
</svelte:head>

<article>
	<h1>{metadata?.title}</h1>
	<p>Publié le {metadata?.datePublished}</p>

	<!-- Rendu du Markdown-->
	<!-- <svelte:component this={post} /> -->
	<Page />
</article>
