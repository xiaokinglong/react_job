import React, { Component } from 'react';

import arr from './demo.js';

class Lazy extends Component {
	render() {
		const all = [
			...arr,
			...arr,
			...arr
		];
		console.log(all);
		return (
			<div>
				{all.map((res, i) => {
					return <p style={{color: res, backgroundColor: res}} key={i}>{i}</p>;
				})}
			</div>
		);
	}
}

export default Lazy;
