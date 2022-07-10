/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				red: {
					550: "#de3a3a",
				},
				gray: {
					75: "#F6F6F6",
				},
			},
			fontFamily: {
				sans: ["Plus Jakarta Sans"],
			},
			backgroundImage: {
				"jumbotron-pattern": "url('/img/jumbotron-pic.jpg')",
			},
		},
	},
	variants: {
		extend: {
			fontFamily: ["hover", "focus"],
		},
	},
	plugins: [],
	corePlugins: {
		fontFamily: true,
	},
};
