/// <reference types="@sveltejs/kit" />

export interface Card {
	id: number;
	title: string;
	body: string;
	img: {
		src: string;
		alt: string;
	};
}
