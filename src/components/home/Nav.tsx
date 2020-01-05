import React from 'react'
import { Menu,Dropdown, Icon,Avatar,Button } from 'antd';
import WebIcon from '../../static/img/home/web-icon.png'
import '../../less/home/nav.less'
const { SubMenu } = Menu;
 class Nav extends React.Component{
    state = {
        current: '1',
      };
    handleClick = (key: any) => {
        console.log(key);
        this.setState({
          current: key,
        });
      };
    render(){
      const {current} = this.state
      const  DayMenu = (<Menu onClick={this.handleClick.bind(this,"first")}>
                <Menu.Item key="1">公司相关</Menu.Item>
                <Menu.Item key="2">IT相关</Menu.Item> 
                <Menu.Item key="3">编程相关</Menu.Item> 
            </Menu>)
      const  KnowMenu =(<Menu onClick={this.handleClick.bind(this,"knowledge")}>
                <Menu.Item key="4">开发相关</Menu.Item>
                <Menu.Item key="5">Workflow介绍</Menu.Item> 
                </Menu>)
        return(
            <div className='nav'>
              <img src={WebIcon} className="image" />
              <div className="menu" style={{visibility:this.props.showmenu}}>
               <Dropdown overlay={DayMenu} onClick={this.handleClick.bind(this,"first")} className={current=="first"?"selected":""} >
                  <span>First Day</span>
                </Dropdown>
                <Dropdown overlay={KnowMenu} onClick={this.handleClick.bind(this,"knowledge")}  className={current=="knowledge"?"selected":""} >
                <span>Knowledge</span>
                </Dropdown>
                <span onClick={this.handleClick.bind(this,"share")}  className={current=="share"?"selected":""}  >Share</span>
                <span onClick={this.handleClick.bind(this,"link")}  className={current=="link"?"selected":""}  >Link</span>
              </div>
              <div className="log">
                <Button type="primary" shape="round">LOG</Button>
              </div>
          </div>
        )
    }
}
export default Nav