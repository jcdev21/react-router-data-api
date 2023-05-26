import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div className="bg-slate-400">
			<nav>
				<Link to={'/'}>Home</Link>
				<Link to={'/teams'}>Teams</Link>
			</nav>

			<Outlet />
		</div>
	);
}
