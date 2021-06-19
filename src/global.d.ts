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

export interface AboutPanel {
	linkedin: string;
	instagram: string;
	id: string;
	headerText: string;
	facebook: string;
	description: string;
}

export interface AboutPanelData {
	aboutPanel: AboutPanel;
}
