import type { IPost } from './postInterface';

export const posts: IPost[] = [
	{
		user: {
			name: 'Fernando Obregon',
			id: 13
		},
		likes: 20,
		time: 20,
		comments: [
			{
				user: 'User 2',
				text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
			},
			{
				user: 'User 2',
				text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
			}
		]
	},
	{
		user: {
			name: 'Emiliano Carmona',
			id: 12
		},
		likes: 20,
		time: 20,
		comments: [
			{
				user: 'User 2',
				text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quidem, delectus neque, ipsam at fugiat iusto, repellat inventore molestiae corporis minus aut voluptatibus saepe fugit cupiditate itaque totam. Eaque, iure?'
			}
		]
	}
];
