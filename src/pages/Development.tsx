import React, { Children } from "react";
import Web from '../static/img/home/bg_web.jpg'
import { Button, List, Typography, Carousel, Menu, Icon } from 'antd'
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import ListFile from '../components/ListFile'
import '../less/company.less'
import FileUpload from '../components/FileUpload'
class Development extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }
    
    render() {
        const data = [
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
        ];
        return (
            <Row className="company">
               
                <Row className="content_company">
                    <Col span={4} style={{ height:'100%' }}>
                        <Menu
                            style={{ width: 256,height:'100%' }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={'inline'}
                        >
                            <Menu.Item key="1">
                                <Icon type="mail" />
                                Navigation One
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="calendar" />
                                Navigation Two
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="calendar" />
                                Navigation Three
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="calendar" />
                                Navigation Four
                            </Menu.Item>
                           
                        </Menu>
                    </Col>
                    <Col span={20} className="list">
                       <ListFile />
                    </Col>
                </Row>
            </Row>


        )
    }
}

export default Development