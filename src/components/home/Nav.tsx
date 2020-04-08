import React from 'react'
import { Menu, Dropdown, Icon, Avatar, Button,Row } from 'antd';
import WebIcon from '../../static/img/home/web-icon.png'
import Ava from '../../static/img/home/avatar.png'
import * as LoginService from '../../services/loginService'
import '../../less/home/Nav.less'
import {serverIPDownload} from '../../utils/GlobalConstants.js'
import emitter from '../../utils/ev.js'
import { hashHistory, withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
@withRouter
class Nav extends React.Component {
  state = {
    current: this.getCurrent(),
    visible:false,
    userdata:JSON.parse(localStorage.getItem("user")),
    eventEmitter:"",
  };
  componentWillMount(){
    emitter.addListener("changeUser",()=>{
      this.setState({
        userdata:JSON.parse(localStorage.getItem("user"))
      })
  });
  }
  componentWillUnmount=()=>{
    emitter.removeListener("changeUser",()=>{
      this.setState({
        userdata:JSON.parse(localStorage.getItem("user"))
      })
  });
  }
  handleMenuClick = e => {
    // if (e.key === '3') {
    //   this.setState({ visible: false });
    // }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  getCurrent() {
    console.log(this.props);
    let location = this.props.history.location.pathname.split('/')
    switch (location[location.length - 1]) {
      case 'home':
        return 'home';
      case 'company':
        return 'first';
      case 'it':
        return 'first';
      case 'programming':
        return 'first';
      case 'development':
        return 'knowledge';
      case 'filelist':
        return 'knowledge';
      case 'share':
        return 'share';
      case 'portal':
        return 'portal';
        case 'knowledge':
        return 'knowledge';
      default:
        return ''

    }
  }
  signout = () =>{
    LoginService.sign_out().then(res=> {
      localStorage.removeItem("user");
      this.props.history.push("/login")
    })

  }
  handleClick = (key: any, link: any) => {
    console.log(key);
    this.setState({
      current: key,
    });
    this.props.history.push(`/home/${link}`)
  };
  render() {
    const { current } = this.state
     const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" onClick={()=>{this.props.history.push('/home/userinfo')}}>Personal Center</Menu.Item>
        {this.state.userdata.role == "1" ?
        <Menu.Item key="2" onClick={()=>{this.props.history.push('/home/admin')}}>Manage</Menu.Item>:""
      }
        <Menu.Item key="3" onClick={this.signout}>Sign Out</Menu.Item>
      </Menu>
    );
    return (
    
      <Row className='nav' type="flex" align="middle">
        <span className="web_title" onClick={()=>{this.props.history.push('/home/')} } >TeamWiki</span>
        <div className="menu" style={{ visibility: this.props.showmenu }}>
          {/* <Dropdown overlay={DayMenu} onClick={this.handleClick.bind(this, "first", 'company')} className={current == "first" ? "selected" : ""} >
            <span>First Day</span>
          </Dropdown> */}
          {/* <div style={{float:"right"}}> */}
          <span onClick={this.handleClick.bind(this, "home", '')} className={current == "home" ? "selected" : ""}>Home</span>
          {/* <Dropdown overlay={KnowMenu} onClick={this.handleClick.bind(this, "knowledge", 'development')} className={current == "knowledge" ? "selected" : ""} > */}
            <span onClick={this.handleClick.bind(this, "knowledge", 'knowledge')} className={current == "knowledge" ? "selected" : ""}>Knowledge</span>
          {/* </Dropdown> */}
          <span onClick={this.handleClick.bind(this, "share", 'share')} className={current == "share" ? "selected" : ""}  >Share</span>
          <span onClick={this.handleClick.bind(this, "portal", 'portal')} className={current == "portal" ? "selected" : ""}  >Portal</span>
          
        </div>
        <div className="log" style={{ visibility: this.props.showmenu }}>
           {this.state.userdata?
           <Dropdown overlay={menu} >
             <Avatar style={{cursor:"pointer"}} src={this.state.userdata.avatar?`${serverIPDownload}/${this.state.userdata.avatar}`:Ava}
              onClick={()=>{this.props.history.push('/home/userinfo')}}
             size={40} />
         </Dropdown>
         :
         <Button type="primary" shape="round" onClick={()=>{this.props.history.push('/login')} } >LOG</Button>
          }
           </div>
      </Row>
    )
  }
}
export default Nav