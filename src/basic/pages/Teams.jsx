import React from 'react';
import {
	Link,
	Outlet,
	useLoaderData,
	useRouteLoaderData,
} from 'react-router-dom';

export default function Teams() {
	const data = useLoaderData();
	console.log('Teams - data :', data);

	const user = useRouteLoaderData('root');
	console.log('user ', user);

	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		console.log('useEffect teams ', data);
	}, [data]);

	return (
		<div>
			Teams <br />
			<button onClick={() => setCount((count) => count + 1)}>
				Count : {count}
			</button>
			<Link to="/teams/20">To Team</Link>
			<Outlet />
		</div>
	);
}
