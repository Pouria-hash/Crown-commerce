import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { userLogoutRequst } from '../../actions/userAction';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import './HeaderComponent.scss';

const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const cartToggleHidden = useSelector((state) => state.cartToggleHidden);
	const { hidden } = cartToggleHidden;

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(userLogoutRequst());
	};

	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<nav className="nav">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{userInfo ? (
					<Fragment>
						<Link to="/dashboard" className="option">
							Dashboard
						</Link>
						<Link to="#" onClick={handleLogout} className="option">
							Logout
						</Link>
					</Fragment>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</nav>
			{!hidden && <CartDropdown />}
		</div>
	);
};

export default Header;
