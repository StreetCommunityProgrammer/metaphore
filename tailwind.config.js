/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				blob: "blob 7s infinite",
				orbit: "orbit 5s linear infinite"
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
				orbit: {
					"0%": {
						transform: " rotate(0deg) translateX(150px) rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg) translateX(150px) rotate(- 360deg)",
					}
				}
			},
		},
	},
	darkMode: ['class', '[data-theme="winter"]'],
	daisyui: {
		themes: ['winter', 'black'],
		logs: false,
	},
	plugins: [require('daisyui')],
};
