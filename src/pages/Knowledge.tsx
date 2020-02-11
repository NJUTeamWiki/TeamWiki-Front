import React from 'react'
import {Row,Col} from 'antd'
import '../less/knowledge.less'
class Knowledge extends React.Component{
    render(){
        return(
            <Row className="knowledge">
                <Row className="firstday">
                    <Row className="title">First Day</Row>
                    <Row className="itemlist">
                        <Col span={8} className="item"><Row className="name">Company Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Team  Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Projects Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Office Environment & Facilities</Row></Col>
                        <Col span={8} className="item"><Row className="name">Development Environment Setup</Row></Col>
                        <Col span={8} className="item"><Row className="name">Accounts</Row></Col>
                        <Col span={8} className="item"><Row className="name">Permissions</Row></Col>
                    </Row>
                </Row>
                <Row className="firstday">
                    <Row className="title">Workflow</Row>
                    <Row className="itemlist">
                        <Col span={8} className="item"><Row className="name">Workflow Overview</Row></Col>
                        <Col span={8} className="item"><Row className="name">Source Code Management</Row></Col>
                        <Col span={8} className="item"><Row className="name">Programming Guidelines</Row></Col>
                        <Col span={8} className="item"><Row className="name">CI/CD Guidelines</Row></Col>
                        <Col span={8} className="item"><Row className="name">Testing Guidelines</Row></Col>
                       
                    </Row>
                </Row>
                <Row className="firstday">
                    <Row className="title">Books</Row>
                    <Row className="itemlist">
                        <Col span={8} className="item"><Row className="name">Head First Java</Row></Col>
                        
                    </Row>
                </Row>

            </Row>
        )
    }
}
export default Knowledge