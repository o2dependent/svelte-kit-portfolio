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
				<img
					in:receive={{ key: d.id }}
					out:send={{ key: d.id, duration: 300 }}
					src={d.img.src}
					alt={d.img.alt}
				/>
			{/await}
		{/if}
	</div>
{/if}

<style>
	.card {
		width: 100%;
		background-color: white;
		box-shadow: 0 0 5px #00000040;
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
		cursor: unset;
		box-shadow: 0 0 10px #00000080;
		max-width: 100vw;
	}

	img {
		object-fit: cover;
		cursor: pointer;
	}
</style>
