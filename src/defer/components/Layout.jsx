import { useCallback } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
	const navigate = useNavigate();

	const randomIntFromInterval = useCallback((min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + 1);
	}, []);

	const handlePostNavigation = useCallback(() => {
		navigate(`/post/${randomIntFromInterval(6, 100)}`);
	}, [navigate, randomIntFromInterval]);

	return (
		<div>
			<nav>
				<Link to={'/'}>Home</Link>
				<button onClick={handlePostNavigation}>Random Post</button>
			</nav>

			<Outlet />
		</div>
	);
}
