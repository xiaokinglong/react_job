import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// tips: 导入自定义的组件

import Login from '../page/login';
import Register from '../page/register';
import Admin from '../page/admin';
import IndexData from '../view/indexData';

// tips:

import NotFound from '../page/404';
class Routers extends Component {
	componentWillMount() {
		console.log('这里是router的生命周期');
	}

	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/login" component={Login} exact />
						<Route path="/register" component={Register} exact />
						<Route path="/admin" component={Admin} exact></Route>
						{/* tips: 这里是404的页面 */}
						<Route path="/notFound" component={NotFound} />
						<Redirect to="/notFound" />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Routers;
