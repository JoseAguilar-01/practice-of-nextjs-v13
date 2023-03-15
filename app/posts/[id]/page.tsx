import PostItem from '@nextjs-13/app/components/PostItem';

const getPost = async (id: any) => {
	await new Promise(resolve => setTimeout(resolve, 8000));

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const result = await response.json();
	return result;
};

const Post = async ({ params }: { params: any }) => {
	const { id } = params;

	const postInfo = await getPost(id);

	return (
		<div className='px-5'>
			<h2>Hola Mundo</h2>
			<PostItem {...postInfo} />
		</div>
	);
};
export default Post;
