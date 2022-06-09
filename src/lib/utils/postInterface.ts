import type { IComment } from './commentInterface';

export interface IPost {
	user: {
		name: string;
		id: number;
	};
	time: number;
	likes: number;
	comments: IComment[];
}
