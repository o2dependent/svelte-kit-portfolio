<script context="module" lang="ts">
	import Masonry from 'svelte-masonry';

	export const prerender = true;
	let refreshLayout;
</script>

<script lang="ts">
	let cards = new Array(10).fill(null).map((x, idx) => ({
		title: `Title ${idx}`,
		body: `Not a sunrise but a galaxyrise circumnavigated extraplanetary bits of moving fluff network of wormholes Flatland. Courage of our questions rich in heavy atoms across the centuries Jean-François Champollion vanquish the impossible something incredible is waiting to be known. Muse about invent the universe a mote of dust suspended in a sunbeam the only home we've ever known emerged into consciousness emerged into consciousness? With pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam concept of the number one hearts of the stars hearts of the stars made in the interiors of collapsing stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.`,
		img: {
			src: (w: number, h: number) => `https://source.unsplash.com/random/${w}x${h}`,
			alt: 'Photo'
		}
	}));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Masonry bind:refreshLayout gridGap={'0.75rem'} colWidth={'minmax(Min(350px, 100%), 1fr)'}>
	{#each cards as card}
		<div class="card">
			<img
				on:load={refreshLayout}
				src={card.img.src(
					Math.floor(Math.random() * 350 + 350),
					Math.floor(Math.random() * 350 + 350)
				)}
				alt={card.img.alt}
			/>
			<div class="card__body">
				<strong>{card.title}</strong>
				<p>{card.body}</p>
			</div>
		</div>
	{/each}
</Masonry>

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
</style>
