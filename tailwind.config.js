/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				body: ['"Montserrat", sans-serif'],
			},

			backgroundImage: {
				"info-image": "url('../src/img/backgrounds/bg-1.jpeg')",
				"founders-image": "url('../src/img/backgrounds/bg-2.jpeg')",
				
			},
		},
		plugins: [],
	},
};
