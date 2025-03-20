<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Sandbox</title>
	<meta name="description" content="sandbox description" />
</svelte:head>

{@render children()}
