export default function Register() {
	return (
		<section className='h-screen grid place-items-center'>
			<form>
				<div className=''>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter name'
						className='ml-3 px-3 py-1 font-semibold rounded'
					/>
				</div>
				<div className='mt-5'>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter email'
						className='ml-3 px-3 py-1 font-semibold rounded'
					/>
				</div>
				<div className='mt-5'>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Enter password'
						className='ml-3 px-3 py-1 font-semibold rounded'
					/>
				</div>
				<button
					type='submit'
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded'>
					Submit
				</button>
			</form>
		</section>
	);
}
