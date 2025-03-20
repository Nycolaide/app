<script lang="ts">
	let { data } = $props();
	let { pages } = $derived(data);
</script>

<h2>Documentation pages</h2>

{#if pages && pages.length > 0}
	{#each pages as element, index (index)}
		<a href={`/docs/${element.slug}`}>
			<p>{element.metadata.title}</p>
		</a>
	{/each}
{:else}
	<p>No pages</p>
{/if}
