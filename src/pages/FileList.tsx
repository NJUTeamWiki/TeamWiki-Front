import React, { Children } from "react";
import Web from '../static/img/home/bg_web.jpg'
import { Button, List, Typography, Carousel, Menu, Icon } from 'antd'
const ButtonGroup = Button.Group
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import ListFile from '../components/ListFile'
import '../less/filelist.less'
import UploadFileModal from '../components/UploadFileModal'

class FileList extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            selected:'list'
        }
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
            <Row className="filelist"> 
                <Row className="content_filelist">
                <Row className="title">
                <ButtonGroup>
                    <Button className={this.state.selected=="list"?"selected":""} onClick={()=>{this.setState({selected:"list"})}} >List</Button>
                    <Button className={this.state.selected=="icon"?"selected":""} onClick={()=>{this.setState({selected:"icon"})}}>Icon</Button>
                </ButtonGroup> 
                <UploadFileModal />
                </Row>     
                    {/* <Col span={4} style={{ height:'100%' }}>
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
                    </Col> */}
                    <Col span={24} className="list">
                       <ListFile />
                    </Col>
                </Row>
            </Row>


        )
    }
}

export default FileList