module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'light',
			{
				dark: {
					primary: '#408AFA',

					secondary: '#D926A9',

					accent: '#6d28d9',

					neutral: '#FEFEFE',

					'base-100': '#1B1A1D',

					'base-200': '#2A2D2E',
					'base-300': '#3C3F41',

					'text-neutral-focus': '#515155',

					info: '#c026d3',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#f43f5e'
				}
			}
		]
	}
};
