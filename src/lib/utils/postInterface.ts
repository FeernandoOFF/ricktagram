import type { IComment } from './commentInterface';
import type { IUser } from './userInterface';

export interface IPost {
	user: IUser;
	time: number;
	likes: number;
	comments: IComment[];
}
