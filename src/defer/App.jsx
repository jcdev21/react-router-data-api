import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RandomPost from './pages/RandomPost';
import { postLoader } from './postLoader';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route index element={<Home />} />
			<Route
				path="/post/:postId"
				loader={postLoader}
				element={<RandomPost />}
			/>
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
