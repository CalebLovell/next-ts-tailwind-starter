/* eslint-disable indent */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
	purge: [`./src/**/*.{js,ts,jsx,tsx}`],
	theme: {
		extend: {
			fontFamily: {
				sans: [`Inter var`, ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require(`@tailwindcss/ui`)],
};
