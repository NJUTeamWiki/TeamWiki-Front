import React from 'react'
import { Menu, Dropdown, Icon, Avatar, Button } from 'antd';
import WebIcon from '../../static/img/home/web-icon.png'
import '../../less/home/nav.less'
import { hashHistory, withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
@withRouter
class Nav extends React.Component {
  state = {
    current: this.getCurrent(),
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
      case 'workflow':
        return 'knowledge';
      case 'link':
        return 'link';
      case 'share':
        return 'share'

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
    const DayMenu = (<Menu >
      <Menu.Item key="1" onClick={this.handleClick.bind(this, "first", "company")}>公司相关</Menu.Item>
      <Menu.Item key="2" onClick={this.handleClick.bind(this, "first", "it")}>IT相关</Menu.Item>
      <Menu.Item key="3" onClick={this.handleClick.bind(this, "first", "programming")}>编程相关</Menu.Item>
    </Menu>)
    const KnowMenu = (<Menu >
      <Menu.Item key="4" onClick={this.handleClick.bind(this, "knowledge", 'development')}>开发相关</Menu.Item>
      <Menu.Item key="5" onClick={this.handleClick.bind(this, "knowledge", 'workflow')}>Workflow介绍</Menu.Item>
    </Menu>)
    return (
      <div className='nav'>
        <img src={WebIcon} className="image" />
        <div className="menu" style={{ visibility: this.props.showmenu }}>
          <Dropdown overlay={DayMenu} onClick={this.handleClick.bind(this, "first", 'company')} className={current == "first" ? "selected" : ""} >
            <span>First Day</span>
          </Dropdown>
          <Dropdown overlay={KnowMenu} onClick={this.handleClick.bind(this, "knowledge", 'development')} className={current == "knowledge" ? "selected" : ""} >
            <span>Knowledge</span>
          </Dropdown>
          <span onClick={this.handleClick.bind(this, "share", 'share')} className={current == "share" ? "selected" : ""}  >Share</span>
          <span onClick={this.handleClick.bind(this, "link", 'link')} className={current == "link" ? "selected" : ""}  >Link</span>
        </div>
        <div className="log">
          <Button type="primary" shape="round" onClick={()=>{this.props.history.push('/login')} } >LOG</Button>
        </div>
      </div>
    )
  }
}
export default Nav