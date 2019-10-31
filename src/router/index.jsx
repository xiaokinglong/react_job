import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';


// tips: 导入自定义的组件
import Demo from '../page/demo'
const Routers = () => {
  return (
    <Router>
      <Route path="/" component={Demo}></Route>
    </Router>
  )
}

export default Routers