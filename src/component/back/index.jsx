import React, { Component, Suspense } from 'react';
import Loadings from './loading';
import './loading.scss';

import axios from '../../axios/index'

const OtherLazy = React.lazy(() => import('./lazy'));

class Back extends Component {
	componentDidMount() {
		axios.get('geocode/geo?address=北京市朝阳区阜通东大街6号&output=json&key=30c9cc02dcf4290fa5197e175354d6a1').then(res => {
			console.log(res);
		})
	}

	render() {
		return (
			<div className="back">
				<Suspense fallback={<Loadings/>}>
					<div>sadh</div>
					<OtherLazy />
				</Suspense>
			</div>
		);
	}
}

export default Back;
