import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

export const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() =>
					dispatch(
						login({ name: 'Michael', age: 25, email: 'mcarillon97@gmail.com' })
					)
				}
			>
				Login
			</button>

			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	);
};
