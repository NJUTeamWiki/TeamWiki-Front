import React, { Children } from "react";
import {Button} from 'antd'
import Nav from '../components/home/Nav'
import {
  BrowserRouter as Router, IndexRoute,
  withRouter,
} from "react-router-dom";
@withRouter
class Home extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <Router>
      <div className='home'>
          <Nav  />
         {this.props.children}
      </div>
      // </Router>
    )
  }
}

export default Home