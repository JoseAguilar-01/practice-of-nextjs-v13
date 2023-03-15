export interface PostProps {
	userId: number | string;
	id: number | string;
	title: string;
	body: string;
}

export interface CommentProps {
	postId: number | string;
	id: number | string;
	name: string;
	email: string;
	body: string;
}
