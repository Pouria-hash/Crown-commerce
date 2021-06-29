import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/header/HeaderComponent';
import HomeScreen from './screens/HomeScreen';
import ShopPage from './screens/shopPage/ShopPage';
import SigninPage from './screens/signinPage/SigninPage';
import CheckoutPage from './screens/CheckoutPage/CheckoutPage';
import CollectionPage from './screens/collectionPage/CollectionPage';

import { checkUserSession } from './actions/userAction';

const PageNotFound = () => {
	return (
		<div>
			<h1>Page Not Found</h1>
		</div>
	);
};

const App = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(
		() => {
			dispatch(checkUserSession());
		},
		[ dispatch ]
	);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={HomeScreen} exact />
				<Route path="/shop" component={ShopPage} exact />
				<Route path="/shop/:collectionid" component={CollectionPage} />
				<Route path="/checkout" component={CheckoutPage} />
				<Route path="/signin" render={() => (userInfo ? <Redirect to="/" /> : <SigninPage />)} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
