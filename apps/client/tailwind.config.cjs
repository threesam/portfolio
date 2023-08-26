module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['Barrio', 'monospace'],
			sans: ['Montserrat', 'sans-serif'],
			mono: ['monospace']
		},
		extend: {
			backgroundImage: {
				'gradient-fade': 'linear-gradient(180deg, #000, transparent)',
				'gradient-3': `radial-gradient(circle at top left,rgba(19,19,19, 0.55),transparent 80%),
					 radial-gradient(circle at top right,rgba(33,48,25, 0.75),transparent 100%),
					 radial-gradient(at bottom left,rgba(33,48,25, 0.75),transparent 100%),
					 radial-gradient(at bottom right,rgba(19,19,19, 0.55),transparent 80%);`,
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			colors: {
				primary: '#F76919',
				secondary: '#F79E19',
				tertiary: '#049786',
				dark: '#1F1E1E',
				light: '#F0F0F0'
			}
		},
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman'
		}
	},
	plugins: []
}
