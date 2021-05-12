import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Sell from '../containers/Sell';
import AboutItem from '../containers/AboutItem';
import AboutCategories from '../containers/AboutCategories';
import SellForm from '../containers/SellForm';

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={Home} />
				<Route exact path='/Item/:handle' component={AboutItem} />
				<Route
					exact
					path='/Category/:handle'
					component={AboutCategories}
				/>
				<Route exact path='/sell' component={Sell} />
				<Route exact path='/sell/:category' component={SellForm} />
			</Router>
		);
	}
}
