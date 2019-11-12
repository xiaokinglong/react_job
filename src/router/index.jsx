import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";


// tips: 导入自定义的组件

import Login from '../page/login';
import Register from '../page/register';
import Admin from '../page/admin';
import IndexData from '../view/indexData';

// tips:
import NotFound from '../page/404';

class Routers extends Component {
	componentWillMount() {
		// 权限的管理
		const customHistory = createBrowserHistory();
		console.log({
			customHistory
		});
		const userInfo  = JSON.parse(localStorage.getItem('info'));
		console.log({
			userInfo
		});
		if (userInfo) {
			if (userInfo.name === 'Long') {
				console.log('ppp')
				customHistory.push('/admin/index')
			} else {
				customHistory.push('/login')
			}
		}
		
	}
	componentDidMount() {
		
	}

	
	render() {
		return (
				<Router>
					<Switch>
						<Route path="/login" component={Login} exact />
						<Route path="/register" component={Register} exact />
						<Admin >
							<Switch>
								<Route path="/admin/index" exact component={IndexData} />
								<Route path="/notFound" component={NotFound} />
								<Redirect to="/notFound" />
							</Switch>
						</Admin>
						{/* <Route path="/admin" component={Admin} exact></Route> */}
						{/* tips: 这里是404的页面 */}
						<Route path="/notFound" component={NotFound} />
						<Redirect to="/notFound" />
					</Switch>
				</Router>
		);
	}
}

export default Routers;
