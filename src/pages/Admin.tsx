import React, { Children } from "react";
import { Button, Row, Col } from 'antd'
import * as loginService from '../services/loginService'
import { Table, Tag, Select, message, Tabs,Input } from 'antd';
import Nav from '../components/home/Nav'
const { TabPane } = Tabs;
const { Option } = Select;
const {TextArea } = Input
import {
    BrowserRouter as Router, IndexRoute,
    withRouter,
    hashHistory
} from "react-router-dom";
import '../less/home/Admin.less'
@withRouter
class Admin extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            userlist: [],
            announcement:"",
            isChange:true
        }
    }
    callback = (key) => {
        console.log(key);
    }
    handleChange = (item, value) => {
        loginService.updateUserRole({ uid: item.userId.toString(), role: value }).then(res => {
            if (res.code == 1) {
                message.success("success")
                this.getUserlist()
            }
            else {
                message.error(res.msg)
            }
        })

    }
    componentDidMount() {
        this.getUserlist()
        this.getAnnouncement();

    }
    saveAnnoun = ()=>{
        loginService.changeAnnouncement(this.state.announcement).then(res => {
            if (res.code == 1) {
                this.setState({
                    announcement: res.data
                })
                message.success(res.msg)
            }
            else {
                message.error(res.msg)
            }
        })
    }
    getAnnouncement = ()=>{
        loginService.getAnnouncement().then(res => {
            if (res.code == 1) {
                this.setState({
                    announcement: res.data.content
                })
            }
            else {

            }
        })
    }
    getUserlist = () => {
        loginService.getUser().then(res => {
            if (res.code == 1) {
                this.setState({
                    userlist: res.data
                })
            }
            else {

            }
        })
    }
    render() {
        const columns = [
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',

            },
            {
                title: 'Name',
                dataIndex: 'username',
                key: 'username',

            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: 'Introduction',
                dataIndex: 'introduction',
                key: 'introduction',

            },

            {
                title: 'CreateTime',
                dataIndex: 'createTime',
                key: 'createTime',
                render: (text, item) => {
                    return text.replace("T", " ")
                }
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
                render: (text, item) => {
                   
                    
                    return text=="1"?"Leader" : <Select defaultValue={text.toString()} style={{ width: 120 }} onChange={this.handleChange.bind(this, item)}>
                       
                        <Option value="2">Guru</Option>
                        <Option value="3" >
                            NewComer
                        </Option>
                    </Select>
                }
            }]
            console.log(this.state.announcement)
        return (
            // <Router>
            <Row className="admin">
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="User" key="1">
                    <Row className="admincontent">
                    <Table columns={columns} dataSource={this.state.userlist} />
                     </Row>
                    </TabPane>
                    <TabPane tab="Announcement" key="2">
                    <TextArea rows={4} defaultValue={this.state.announcement} onChange={(e)=>{this.setState({announcement:e.target.value,isChange:false})}} />
                    <Button type="primary" style={{float:"right",margin:"10px"}} disabled={this.state.isChange} onClick={this.saveAnnoun}>保存</Button>
                     </TabPane>
                 
                </Tabs>
               

            </Row>
            // </Router>
        )
    }
}

export default Admin