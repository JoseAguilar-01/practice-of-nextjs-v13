'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { capitalizeFirstLetter } from '@nextjs-13/app/helpers/capitalizeFirstLetterOfSentence';
import SeeMoreLink from '../SeeMoreLink';
import PostsCommentsList from '../PostsCommentsList';

const PostItem = (props: any) => {
	const [showComments, setShowComments] = useState(false);

	const pathname = usePathname();

	const { id, title, body } = props;

	return (
		<article key={id} className='p-2 my-2 bg-gray-200 rounded-md'>
			<h3 className='mb-2 text-xl font-bold'>{capitalizeFirstLetter(title)}</h3>
			<p>{capitalizeFirstLetter(body)}.</p>
			<div className='flex justify-end gap-5 mt-4'>
				<button
					className='px-2 py-1 font-semibold text-white transition-colors bg-indigo-500 rounded-md hover:bg-indigo-600'
					onClick={() => setShowComments(!showComments)}
				>
					{showComments ? 'Hide comments' : 'Show comments'}
				</button>
				{pathname !== `/posts/${id}` && (
					<SeeMoreLink href={`/posts/${id}`}>See more</SeeMoreLink>
				)}
			</div>
			{showComments && <PostsCommentsList postId={id} />}
		</article>
	);
};
export default PostItem;
