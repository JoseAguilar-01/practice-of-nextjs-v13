'use client';

import { useEffect, useState } from 'react';
import { PostProps } from '@nextjs-13/app/posts/interfaces';
import PostItem from '../PostItem';

const PostList = () => {
	const [postList, setPostList] = useState<PostProps[]>([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const result = await response.json();
		return setPostList(result);
	};

	return (
		<div>
			{postList.slice(0, 5).map(post => (
				<PostItem key={post.id} {...post} />
			))}
		</div>
	);
};

export default PostList;
