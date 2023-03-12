/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	darkMode: ['class', '[data-theme="winter"]'],
	daisyui: {
		themes: ['winter', 'black'],
		logs: false,
	},
	plugins: [require('daisyui')],
};
