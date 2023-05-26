import { defer } from 'react-router-dom';
import { getCommentsByPostId, getPostById } from './api';

export const postLoader = async ({ params }) => {
	const postId = params.postId;
	const post = await getPostById(postId);
	const commentsPromise = getCommentsByPostId(postId);
	return defer({ post, commentsPromise });
};
