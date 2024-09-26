import { useState } from 'react'

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { Button } from 'flowbite-react';

function App() {

	// console.log('App Component Rendered')

	const [form, setForm] = useState(null);

	return (
		<div className='p-4'>
			<div className='p-3 flex gap-3 justify-end bg-gray-800 text-gray-200'>
				<Button onClick={() => setForm(<Register />)} color='blue'>Register</Button>
				<Button onClick={() => setForm(<Login />)} color='green'>Login</Button>
			</div>

			<div className='p-4'>
				{form}
			</div>
		</div>);
}

export default App;
