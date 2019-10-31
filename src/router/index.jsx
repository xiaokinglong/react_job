import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';


// tips: 自定义的导入
import Demo from '../page/demo'
const Routers = () => {
  return (
    <Router>
      <Route path="/" component={Demo}></Route>
    </Router>
  )
}

export default Routers