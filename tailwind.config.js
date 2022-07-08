/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Plus Jakarta Sans"],
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
