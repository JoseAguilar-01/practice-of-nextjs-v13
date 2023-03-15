'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CommentProps } from '@nextjs-13/app/posts/interfaces';
import { capitalizeFirstLetter } from '@nextjs-13/app/helpers/capitalizeFirstLetterOfSentence';

const PostsCommentsList = (props: any) => {
	const [comments, setComments] = useState<CommentProps[]>([]);

	const { postId } = props;

	useEffect(() => {
		getComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getComments = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		);
		const result = await response.json();
		return setComments(result);
	};

	return (
		<ul>
			{comments.map(comment => {
				const { id, body, name, email } = comment;

				return (
					<li key={`comment-${id}`} className='my-3'>
						<div className='flex items-center gap-4'>
							<h4 className='text-lg font-bold '>
								-
								<span className='text-yellow-500'>
									{capitalizeFirstLetter(name)}
								</span>
							</h4>
							<Image
								alt={`image-profile-${email}`}
								src={`https://api.dicebear.com/5.x/bottts/svg?seed=${email}`}
								width={75}
								height={75}
								className='rounded-xl bg-violet-500'
							/>
						</div>
						<p className='px-3'>{capitalizeFirstLetter(body)}.</p>
					</li>
				);
			})}
		</ul>
	);
};

export default PostsCommentsList;
