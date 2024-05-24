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
				backgroundPrimary: "#F5F6FA",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
