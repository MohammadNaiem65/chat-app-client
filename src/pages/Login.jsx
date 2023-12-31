import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../configs/firebase.config';
import logoImage from '../assets/images/lws-logo-light.svg';
import Error from '../components/ui/Error';

export default function Login() {
	const provider = new GoogleAuthProvider();

	// handle login
	const handleLogin = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				res.user.getIdToken().then((idToken) => {
					fetch('http://localhost:5000/auth/login', {
						method: 'POST',
						headers: {
							Authorization: `Bearer ${idToken}`,
						},
					})
						.then((res) => res.json())
						.then((data) => console.log(data));
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='grid place-items-center h-screen bg-[#F9FAFB'>
			<div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-md w-full space-y-8'>
					<div>
						<Link to='/'>
							<img
								className='mx-auto h-12 w-auto'
								src={logoImage}
								alt='Learn with sumit'
							/>
						</Link>
						<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
							Sign in to your account
						</h2>
					</div>
					<form className='mt-8 space-y-6'>
						<input type='hidden' name='remember' value='true' />
						<div className='rounded-md shadow-sm -space-y-px'>
							<div>
								<label
									htmlFor='email-address'
									className='sr-only'>
									Email address
								</label>
								<input
									id='email-address'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm'
									placeholder='Email address'
								/>
							</div>
							<div>
								<label htmlFor='password' className='sr-only'>
									Password
								</label>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm'
									placeholder='Password'
								/>
							</div>
						</div>

						<div className='flex items-center justify-end'>
							<div className='text-sm'>
								<Link
									to='/register'
									className='font-medium text-violet-600 hover:text-violet-500'>
									Register
								</Link>
							</div>
						</div>

						<button
							onClick={handleLogin}
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'>
							Sign in
						</button>

						<Error message='There was an error' />
					</form>
				</div>
			</div>
		</div>
	);
}
