import React, { Children } from "react";
import {Button} from 'antd'
import Nav from '../components/home/Nav'
import * as loginService from '../services/loginService'
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
  componentDidMount(){
    loginService.checklogin().then((res)=>{
      if(res.code=="1"){
      }
      else{
        this.props.history.push('/login')
      }
    })
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