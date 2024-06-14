/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		data: {
			active: 'page~="active"',
			complete: 'status~="complete"',
			processing: 'status~="processing"',
		},
		fontSize: {
			xs: "0.625rem",
			sm: "0.75rem",
			base: "0.875rem",
			md: "1rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "2rem",
		},
		extend: {
			height: {
				content: "calc(100vh - 70px)",
			},
			colors: {
				primary: "#4880FF",
				success: "#00B69B",
				warning: "#FEC53D",
				error: "#FF0000",
				backgroundPrimary: "#F5F6FA",
				textPrimary: "#202224",
				borderPrimary: "#D5D5D5",
				purple: "#6226EF",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
