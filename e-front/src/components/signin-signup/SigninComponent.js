import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { userLoginStart } from '../../actions/userAction';

const Signin = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [ values, setValues ] = useState({
		email: '',
		password: ''
	});
	const [ showPassword, setShowPassword ] = useState(false);

	const { userInfo, error, loading } = useSelector((state) => state.userLogin);

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(
		() => {
			if (userInfo) {
				history.push(redirect);
			}
		},
		[ history, userInfo, redirect ]
	);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(userLoginStart(values));

		setValues({ email: '', password: '' });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<h2 className="mb-4">I already have an account.</h2>
			<span>Sign in with your email and password.</span>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<FormInput
					label="email"
					name="email"
					type="email"
					value={values.email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					label="password"
					name="password"
					type={showPassword ? 'text' : 'password'}
					value={values.password}
					handleChange={handleChange}
					showPassword={showPassword}
					handleShowPassword={handleShowPassword}
					required
				/>

				<div>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
				</div>
			</form>
		</div>
	);
};

// const [ email, setEmail ] = useState('');
// const [ password, setPassword ] = useState('');
// const [ showPassword, setShowPassword ] = useState(false);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('hi');
// 	};
// 	return (
// 		<div>
// 			<h2>I already have an account.</h2>
// 			<span>Sign in with your email and password.</span>

// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<input id="email" name='email' type="email" value={email} onChange={(e) => setEmail(e.target.email)} required />
// 					<label htmlFor="email">Email</label>
// 				</div>
// 				<div>
// 					<input
// 						id="password"
//                         name='password'
// 						type={showPassword ? 'text' : 'password'}
// 						value={password}
// 						onChange={(e) => setPassword(e.target.email)}
// 						required
// 					/>
// 					<label htmlFor="password">Password</label>
// 					<button type="button" onClick={() => setShowPassword(!showPassword)}>
// 						{showPassword ? 'Hide' : 'Show'} Password
// 					</button>
// 				</div>
// 				<div>
// 					<button type="submit">Sign In</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

export default Signin;
