/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#4880FF",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
