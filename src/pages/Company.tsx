import React, { Children } from "react";
import Web from '../static/img/home/bg_web.jpg'
import { Button, List, Typography, Carousel, Menu, Icon,Avatar } from 'antd'
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import Card from '../components/Card'
import ListFile from '../components/ListFile'
import '../less/firstday/home.less'
import FileUpload from '../components/FileUpload'
class Company extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }
    
    render() {
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
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                        </Col>
                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">Guru</Col>
                        <Col span={20}>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                        </Col>
                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">NewComer</Col>
                        <Col span={20}>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                            <Row className="item_avatar"><Avatar src={Web} size={50} /><span>zhangchi</span></Row>
                        </Col>
                   </Row>
                  
              </Row>
              <Row className="recommend">
                    <Row className="title">Recommend Reading</Row>
                    <Row className="cardlist">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Row>
                 
              </Row>
              </Row>


        )
    }
}

export default Company