import React from 'react'
import { Menu, Dropdown, Icon, Avatar, Button,Row } from 'antd';
import WebIcon from '../../static/img/home/web-icon.png'
import Ava from '../../static/img/home/bg_web.jpg'
import '../../less/home/nav.less'
import { hashHistory, withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
@withRouter
class Nav extends React.Component {
  state = {
    current: this.getCurrent(),
    visible:false,
    userdata:localStorage.getItem("user")
  };
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
      

    }
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
        <Menu.Item key="1">个人中心</Menu.Item>
        <Menu.Item key="2" onClick={()=>{localStorage.removeItem("user"),this.setState({userdata:""})}}>登出</Menu.Item>
      </Menu>
    );
        
    return (
    
      <div className='nav'>
        <img src={WebIcon} className="image" onClick={()=>{this.props.history.push("/home")}} />
        <div className="menu" style={{ visibility: this.props.showmenu }}>
          {/* <Dropdown overlay={DayMenu} onClick={this.handleClick.bind(this, "first", 'company')} className={current == "first" ? "selected" : ""} >
            <span>First Day</span>
          </Dropdown> */}
          {/* <div style={{float:"right"}}> */}
          {/* <Dropdown overlay={KnowMenu} onClick={this.handleClick.bind(this, "knowledge", 'development')} className={current == "knowledge" ? "selected" : ""} > */}
            <span onClick={this.handleClick.bind(this, "knowledge", 'knowledge')} className={current == "knowledge" ? "selected" : ""}>Knowledge</span>
          {/* </Dropdown> */}
          <span onClick={this.handleClick.bind(this, "share", 'share')} className={current == "share" ? "selected" : ""}  >Share</span>
          <span onClick={this.handleClick.bind(this, "portal", 'portal')} className={current == "portal" ? "selected" : ""}  >Portal</span>
          
        </div>
        <div className="log">
           {this.state.userdata?
           <Dropdown overlay={menu} onClick={this.handleClick.bind(this, "first", 'company')} className={current == "first" ? "selected" : ""} >
             <Avatar src={Ava} size={40} />
         </Dropdown>
         :
         <Button type="primary" shape="round" onClick={()=>{this.props.history.push('/login')} } >LOG</Button>
          }
           </div>
      </div>
    )
  }
}
export default Nav