import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/FeernandoOFF/ricktagram.git',
		user: {
			name: 'Fernando Obregon', // update to use your name
			email: 'ferobregon03@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
