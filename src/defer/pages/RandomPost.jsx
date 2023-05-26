import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

export default function RandomPost() {
	const { post, commentsPromise } = useLoaderData();

	return (
		<section>
			<h2>{post.title}</h2>
			<p>{post.body}</p>

			<Suspense fallback={<small>Loading Comments...</small>}>
				<Await resolve={commentsPromise}>
					{(comments) =>
						comments.map((comment) => (
							<span key={comment.id}>
								<small>{comment.body}</small>
								<hr />
							</span>
						))
					}
				</Await>
			</Suspense>
		</section>
	);
}
