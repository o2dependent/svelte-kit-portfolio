<script lang="ts">
	import AboutProfile from '$lib/AboutProfile/index.svelte';
	import '../app.css';
</script>

<div class="__layout">
	<AboutProfile />
	<main>
		<slot />
	</main>
</div>

<style>
	.__layout {
		display: flex;
		width: 100vw;
		min-height: 100vh;
	}

	main {
		background-color: var(--secondary-color);
		box-shadow: inset 0 0 5px #00000040;
		flex: 1;
		display: flex;
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
		padding-top: 28px;
	}
</style>
