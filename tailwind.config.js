/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				body: ['"Montserrat", sans-serif'],
			},

			backgroundImage: {
				"info-image": "url('../src/img/compass.jpeg')",
				"puzzle-image": "url('../src/img/puzzle.jpg')",
				"founders-image": "url('../src/img/office.jpeg')",
			},
		},
		plugins: [],
	},
};
