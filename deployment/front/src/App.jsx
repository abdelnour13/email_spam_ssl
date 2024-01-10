import { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [spam, setSpam] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const body = formData.get('body');

		try {
			const { data } = await axios.post('http://localhost:8001/predict', {
				email_text: body,
			});
			setLoaded(true);
			setSpam(data.is_spam);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setLoaded(false);
	};

	return (
		<div className='h-screen w-screen bg-slate-950'>
			<form
				onSubmit={handleSubmit}
				onChange={handleChange}
				className='flex flex-col items-left justify-center h-full px-8'>
				<label htmlFor='body' className='text-gray-100 text-2xl font-bold'>
					Email spam classification:
				</label>
				<textarea
					name='body'
					id='body'
					rows='15'
					className='bg-slate-800 text-gray-100 rounded-lg p-4 mt-8'></textarea>
				<button className='bg-blue-500 text-white px-4 py-2 mt-8 font-bold rounded-lg'>
					Submit
				</button>
				{loaded ? (
					spam ? (
						<div className='p-4 mt-8 text-white bg-red-600 text-center font-bold rounded-lg'>
							This might be spam!
						</div>
					) : (
						<div className='p-4 mt-8 text-white bg-green-600 text-center font-bold rounded-lg'>
							Not spam
						</div>
					)
				) : null}
			</form>
		</div>
	);
};

export default App;
