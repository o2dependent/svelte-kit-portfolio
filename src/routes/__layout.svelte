<script lang="ts">
	import AboutProfile from '$lib/AboutProfile/index.svelte';
	import '../app.css';
	import { fly, slide, scale } from 'svelte/transition';
	import { bounceOut, cubicIn, cubicInOut, circOut } from 'svelte/easing';
	import { drawerStore } from '../stores/drawerStore';
	import { onMount } from 'svelte';

	let isDrawerOpen: boolean;

	drawerStore.subscribe((val) => {
		isDrawerOpen = val;
	});

	const toggleDrawer = (val?: boolean) => {
		if (typeof val === 'undefined') {
			drawerStore.update(() => !isDrawerOpen);
		} else {
			drawerStore.update(() => val);
		}
	};

	let windowWidth = 0;

	let toggleScroll = (isDrawerOpen: boolean) => null;

	onMount(() => {
		toggleScroll = (isDrawerOpen: boolean) =>
			(document.body.style.overflowY = isDrawerOpen ? 'hidden' : '');

		windowWidth = window.innerWidth;

		window.addEventListener('resize', (e) => {
			// @ts-ignore
			const width = e?.target?.innerWidth;
			windowWidth = width;
			if (isDrawerOpen && width > 768) {
				toggleScroll(false);
			}
		});
	});

	$: toggleScroll(isDrawerOpen);
</script>

<div class="__layout">
	<!-- Mobile FAB -->
	<button class="mobile-nav" on:click={() => toggleDrawer()}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="50%"
			height="50%"
			fill-rule="evenodd"
			clip-rule="evenodd"
			><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path
				d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"
			/></svg
		>
	</button>

	<!-- drawer -->
	{#if isDrawerOpen || windowWidth > 768}
		<div transition:fly={{ x: -400, easing: circOut }} class="profile-panel">
			<AboutProfile />
		</div>
	{/if}

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
	@media screen and (max-width: 768px) {
		.__layout {
			flex-direction: column;
		}
	}

	.profile-panel {
		background-color: var(--tertiary-color);
		width: 350px;
		max-width: 100vw;
		min-height: 100vh;
		height: 100%;
		padding: 2rem;
		padding-top: 28px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		position: sticky;
		top: 0;
	}
	.mobile-nav {
		display: none;
	}
	@media screen and (max-width: 768px) {
		.profile-panel {
			z-index: 999;
		}
		.mobile-nav {
			all: unset;
			z-index: 9999;
			cursor: pointer;
			border-radius: 9999px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			bottom: 0.5rem;
			right: 0.5rem;
			height: 3rem;
			width: 3rem;
			background-color: var(--tertiary-color);
			box-shadow: 0 0 5px #00000040;
		}

		.profile-panel {
			position: fixed;
			left: 0;
			transition: left 300ms ease-out;
			box-shadow: 0 0 3px #00000040;
		}
	}

	main {
		background-color: var(--secondary-color);
		transition: transform 500ms ease-out;
		box-shadow: inset 0 0 5px #00000040;
		flex: 1;
		display: flex;
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
		padding-top: 28px;
	}
</style>
