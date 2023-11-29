import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='w-full min-h-screen bg-slate-900 text-white'>
			<Outlet />
		</div>
	);
}

export default App;
