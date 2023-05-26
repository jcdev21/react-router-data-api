import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Team() {
	const data = useLoaderData();
	console.log('Team - data :', data);

	const [count, setCount] = React.useState(0);

	return (
		<div>
			Team <br />
			<button onClick={() => setCount((count) => count + 1)}>
				Count : {count}
			</button>
		</div>
	);
}
