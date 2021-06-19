<script context="module" lang="ts">
	import Masonry from 'svelte-masonry/Masonry.svelte';

	export const prerender = true;
	let refreshLayout;
</script>

<script lang="ts">
	import cards from '../dummydata/cards';

	import { crossfade, fade, scale } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: 700,
		fallback: scale
	});

	/**
	 * Preview photo handlers
	 */
	let selected: null | typeof cards[0] = null;
	let loading: null | typeof cards[0] = null;

	const load = (image) => {
		loading = image;
		const img = new Image();

		img.onload = () => {
			selected = image;
			loading = null;
		};

		img.src = image.img.src;
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Masonry bind:refreshLayout gridGap={'0.75rem'} colWidth={'minmax(Min(350px, 100%), 1fr)'}>
	{#each cards as card}
		<div class="card">
			<div class="img-container">
				<img
					id="{card.id} "
					on:click={() => load(card)}
					on:load={refreshLayout}
					src={card.img.src}
					alt={card.img.alt}
				/>

				{#if selected?.id !== card.id}
					<div
						class="img-shadow"
						in:receive|local={{ key: card.id }}
						out:send|local={{ key: card.id }}
					/>
				{/if}
				<div class="zoom" on:click={() => load(card)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
						><path
							d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
						/></svg
					>
				</div>
			</div>

			<div class="card__body">
				<strong>{card.title}</strong>
				<p>{card.body}</p>
			</div>
		</div>
	{/each}
</Masonry>

{#if loading || selected}
	<div in:fade out:fade class="photo" on:click={() => (selected = null)}>
		{#if selected}
			{#await selected then d}
				<img in:receive={{ key: d.id }} src={d.img.src} alt={d.img.alt} />
			{/await}
		{/if}
	</div>
{/if}

<style>
	.card {
		width: 100%;
		background-color: white;
		box-shadow: 0 0 5px #00000040;
		position: relative;
	}

	.card__body {
		padding: 1.25rem;
	}

	.card img {
		width: 100%;
	}

	strong {
		margin: 0;
	}

	.card p {
		margin: 0;
		margin-top: 0.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.zoom {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.5rem;
		border-bottom-left-radius: 16px;
		background-color: var(--secondary-color);
		box-shadow: inset 0 0 5px #00000020;
		cursor: pointer;
	}

	/* Card image */
	.img-container {
		position: relative;
	}
	.img-shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -10;
	}

	/* Photo display */
	.photo {
		z-index: 9999;
		background-color: #00000040;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		will-change: transform;
		overflow: hidden;
	}

	.photo img {
		cursor: default;
		box-shadow: 0 0 10px #00000080;
		max-width: 100vw;
		max-height: 100vh;
	}

	img {
		object-fit: cover;
		cursor: pointer;
	}
</style>
