import React from 'react';
import Signin from '../../components/signin-signup/SigninComponent';
import Signup from '../../components/signin-signup/SignupComponent';

const SigninPage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<Signin />
				</div>
				<div className="col-md-6">
					<Signup />
				</div>
			</div>
		</div>
	);
};

export default SigninPage;
