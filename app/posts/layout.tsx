const PostsLayout = (props: any) => {
	const { children } = props;

	return (
		<div>
			<h2>Este es el layout de los Posts</h2>
			{children}
		</div>
	);
};

export default PostsLayout;
