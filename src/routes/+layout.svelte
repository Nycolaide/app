<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Sandbox</title>
	<meta name="description" content="sandbox description" />
</svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/docs">Docs</a>
</nav>

{@render children()}
