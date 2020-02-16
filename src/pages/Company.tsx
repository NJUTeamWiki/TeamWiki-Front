import React, { Children } from "react";
import Web from '../static/img/home/avatar.png'
import { Button, List, Typography, Carousel, Menu, Icon,Avatar,message } from 'antd'
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import Book from '../components/Book'
import {serverIP} from '../utils/GlobalConstants'
import ListFile from '../components/ListFile'
import * as UserService from '../services/loginService'
import '../less/firstday/home.less'
import FileUpload from '../components/FileUpload'
class Company extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            userlist:[]
        }
    }
    componentWillMount(){
        UserService.getUser().then(res=>{
            if(res.code==1){
                this.setState({
                    userlist:res.data
                })
            }
            else{
                message.error(res.msg)
            }
        }
            
            )
    }
    
    render() {
        const {userlist} = this.state
        return (
            <Row className="home_page">
            <Row className="home_first">
              <Row className="title">
                <Row>Welcome to XXX!</Row>
                <Row>This is the team introduction. Can be edited by administrator.</Row>
              </Row>
              
            </Row>
            <Row className="member">
                  <Row className="title">Team Members</Row>
                  <Row className="item">
                        <Col span={3} className="title">Leader</Col>
                        <Col span={20}>
                            {userlist&&userlist.filter((item)=>item.role==1).map((item)=>
                             <Row className="item_avatar" ><Avatar src={item.avatar?`${serverIP}/storage/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>{item.username}</span></Row>
                            )}
                           
                        </Col>
                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">Guru</Col>
                        <Col span={20}>
                            {userlist&&userlist.filter((item)=>item.role==2).map((item)=>
                             <Row className="item_avatar"><Avatar src={item.avatar?`${serverIP}/storage/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>{item.username}</span></Row>
                            )}
                            <Row className="item_avatar"><Avatar src={Web} size={50} style={{margin:"0 auto"}} /><span>nobody</span></Row>
                            
                            </Col>

                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">NewComer</Col>
                        <Col span={20}>
                        {userlist&&userlist.filter((item)=>item.role==3).map((item)=>
                             <Row className="item_avatar"><Avatar src={item.avatar?`${serverIP}/storage/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>zhangchi</span></Row>
                            )}
                              </Col>
                   </Row>
                  
              </Row>
              <Row className="recommend">
                    <Row className="title">Recommend Reading</Row>
                    <Row className="cardlist">
                        <Book/> <Book/> <Book/>

                    </Row>
                 
              </Row>
              </Row>


        )
    }
}

export default Company