import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Conversation from '../pages/Conversation';
import Inbox from '../pages/Inbox';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/inbox',
				element: <Conversation />,
			},
			{
				path: '/inbox/:id',
				element: <Inbox />,
			},
		],
	},
]);

export default routes;
