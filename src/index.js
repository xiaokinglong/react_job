import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './router/index'
import 'antd/dist/antd.css';
if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

ReactDOM.render(<Routers />, document.getElementById('root'));