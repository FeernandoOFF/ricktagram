import { createArray } from './createArray';
import { faker } from '@faker-js/faker';

import type { IHistory } from './historyInterface';
import type { IPost } from './postInterface';
import type { IComment } from './commentInterface';
import { text } from 'svelte/internal';

export const historiesPlaceholder: IHistory[] = createArray(10).map(() => ({
	name: faker.name.findName(),
	image: faker.image.abstract(255, 400)
}));

export const postsPlaceholder: IPost[] = createArray(10).map(() => ({
	comments: createArray(faker.datatype.number(30)).map(
		(): IComment => ({
			user: faker.name.findName(),
			text: faker.lorem.text()
		})
	),
	likes: faker.datatype.number(100),
	time: faker.datatype.number(100),
	user: {
		id: 2,
		name: faker.name.findName()
	}
}));
