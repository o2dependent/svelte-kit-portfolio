import type { Card } from 'src/global';
import images from './images';

// generate dummy data
const cards: Card[] = new Array(10).fill(null).map((x, idx) => ({
	id: idx,
	title: `Title ${idx}`,
	body: `Not a sunrise but a galaxyrise circumnavigated extraplanetary bits of moving fluff network of wormholes Flatland. Courage of our questions rich in heavy atoms across the centuries Jean-François Champollion vanquish the impossible something incredible is waiting to be known. Muse about invent the universe a mote of dust suspended in a sunbeam the only home we've ever known emerged into consciousness emerged into consciousness? With pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam concept of the number one hearts of the stars hearts of the stars made in the interiors of collapsing stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.`,
	img: {
		src: images[idx],
		alt: 'Photo'
	}
}));
export default cards;
