import { RouterProvider, createBrowserRouter, json } from 'react-router-dom';
import Teams from './pages/Teams';
import Team from './pages/Team';

const router = createBrowserRouter([
	{
		element: <Teams />,
		path: 'teams',
		id: 'root',
		loader: async () => {
			// return { name: 'FC Barcelona' };

			console.log('loader teams');
			const data = { some: 'thing' };
			return json(data, { status: 200 });
		},
		children: [
			{
				element: <Team />,
				path: ':teamId',
				loader: async ({ params, request }) => {
					console.log(params);
					console.log(request);

					// const url = new URL(request.url);
					// const searchTerm = url.searchParams.get('q');
					// console.log(searchTerm);

					return json({ teamId: params.teamId }, { status: 200 });
					// return { teamId: params.teamId };
				},
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
