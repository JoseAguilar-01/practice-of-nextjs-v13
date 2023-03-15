import PostList from '../components/PostsList';

const Posts = async () => {
	return (
		<div className='px-5'>
			<h2 className='text-3xl font-bold'>Aquí van todos los posts</h2>
			<section>
				<PostList />
			</section>
		</div>
	);
};

export default Posts;
