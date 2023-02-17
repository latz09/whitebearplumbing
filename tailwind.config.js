/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			dark: '#020014',
			light: '#F5F5FB',
			black: '#000000',
			white: '#FFFFFF',
			red: '#F24F00',
			blue: '#42B8DD',
		},
		fontFamily: {
			tinos: ['Tinos', 'serif'],
			nunito: ['Nunito Sans', 'sans-serif'],
		},
	},
	plugins: [],
};
