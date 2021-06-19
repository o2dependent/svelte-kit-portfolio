<script context="module" lang="ts">
	import { browser, dev } from '$app/env';
	import fetchDato from '../utils/fetchDato';

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	interface AboutPage {
		aboutPage: {
			content: string;
		};
	}

	/**
	 * @type {import('@sveltejs/kit).Load}
	 */
	export async function load() {
		const data = await fetchDato<AboutPage>(`
				query AboutPage {
					aboutPage {
						content(markdown: true)
					}
				}
		`);

		if (data) {
			return {
				props: {
					content: data?.aboutPage?.content || ''
				}
			};
		}
	}
</script>

<script lang="ts">
	export let content: string = '';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	{@html content}
</div>

<style>
	.content {
		flex-grow: 1;
		width: 100%;
		max-width: var(--column-width);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	:global(.content *) {
		text-align: start;
		margin: 0;
		margin-bottom: 0.15rem;
	}
	:global(.content h1) {
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
	:global(.content img) {
		box-shadow: 0 0 5px #00000080;
	}
	h1,
	p,
	a {
		text-align: start;
		margin: 0;
	}
	h1 {
		font-size: 3rem;
		font-weight: 700;
	}
</style>
