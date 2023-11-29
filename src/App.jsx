import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import store from './app/store';

function App() {
	return (
		<Provider store={store}>
			<div className='w-full min-h-screen bg-slate-900 text-white'>
				<Outlet />
			</div>
		</Provider>
	);
}

export default App;
