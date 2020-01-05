import React, { Children } from "react";
import {Button} from 'antd'
import Nav from '../components/home/Nav'
import {
  BrowserRouter as Router, IndexRoute,
  withRouter,
  hashHistory
} from "react-router-dom";
import '../less/home/App.less'
@withRouter
class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <Router>
      <div className='app'>
          <Nav  showmenu="hidden"/>
          <div className="content">
            <div>
              <div className="title">The Website For New Employee</div>
              <div className="intro">Help you quickly understand the company's culture and how the department works</div>
              <div className="button" ><Button type="danger" shape="round" size={120} onClick={() => this.props.history.push('home')}>Try now</Button></div>
            </div>
          </div>
      </div>
      // </Router>
    )
  }
}

export default App