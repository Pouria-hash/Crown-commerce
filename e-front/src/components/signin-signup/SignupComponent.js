import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useLocation, useHistory } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { userRegisterRequest } from '../../actions/userAction';

const SignUp = () => {
	const dispatch = useDispatch();
	// const location = useLocation();
	// const history = useHistory();

	const [ message, setMessage ] = useState('');
	const [ values, setValues ] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});
	const [ showPassword, setShowPassword ] = useState(false);
	const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);

	const { error, loading } = useSelector((state) => state.userRegister);

	// const redirect = location.search ? location.search.split('=')[1] : '/';

	// useEffect(
	// 	() => {
	// 		if (userInfo) {
	// 			history.push(redirect);
	// 		}
	// 	},
	// 	[ history, userInfo, redirect ]
	// );

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.password !== values.confirmPassword) {
			setMessage('Password not match!');
			setTimeout(() => {
				setMessage('');
			}, 3000);
			return;
		}
		dispatch(userRegisterRequest(values));

		setValues({ email: '', password: '', confirmPassword: '' });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const handleShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<div>
			<h2>Sign Up with your email and password.</h2>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{message && <p>{message}</p>}
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
					label="Password"
					name="password"
					pass="password"
					type={showPassword ? 'text' : 'password'}
					value={values.password}
					handleChange={handleChange}
					showPassword={showPassword}
					handleShowPassword={handleShowPassword}
					required
				/>
				<FormInput
					label="confirm password"
					name="confirmPassword"
					pass="password"
					type={showConfirmPassword ? 'text' : 'password'}
					value={values.confirmPassword}
					handleChange={handleChange}
					showPassword={showConfirmPassword}
					handleShowPassword={handleShowConfirmPassword}
					required
				/>

				<div>
					<CustomButton type="submit">Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
