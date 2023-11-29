import { useState } from 'react';

export default function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleRegistration = (e) => {
		e.preventDefault();

		console.log(formData);
	};

	return (
		<section className='h-screen grid place-items-center'>
			<form onSubmit={handleRegistration} className='flex flex-col'>
				<>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter name'
						className='text-gray-600 ml-3 px-3 py-1 font-semibold rounded'
						value={formData.name}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
						required
					/>
				</>

				<>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter email'
						className='text-gray-600 mt-5 ml-3 px-3 py-1 font-semibold rounded'
						value={formData.email}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								email: e.target.value,
							}))
						}
						required
					/>
				</>

				<>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Enter password'
						className='text-gray-600 mt-5 ml-3 px-3 py-1 font-semibold rounded'
						value={formData.password}
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								password: e.target.value,
							}))
						}
					/>
				</>

				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded'>
					Submit
				</button>
			</form>
		</section>
	);
}
