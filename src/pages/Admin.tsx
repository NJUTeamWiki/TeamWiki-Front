import React, { Children } from "react";
import { Button, Row, Col } from 'antd'
import * as loginService from '../services/loginService'
import { Table, Tag, Select ,message} from 'antd';
import Nav from '../components/home/Nav'
const { Option } = Select;
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
            userlist: []
        }
    }
    handleChange = (item,value) => {
        loginService.updateUserRole({uid:item.userId.toString(),role:value}).then(res=>{
            if(res.code==1){
                    this.getUserlist()
            }
            else{
                message.error(res.msg)
            }
        })
      
    }
    componentDidMount() {
      this.getUserlist()
    }
    getUserlist = ()=>{
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
                   return <Select defaultValue={text.toString()} style={{ width: 120 }} onChange={this.handleChange.bind(this,item)}>
                        <Option value="1">NewComer</Option>
                        <Option value="2">Guru</Option>
                        <Option value="3" >
                           Leader
                        </Option>
                        </Select>
            }
            }]
        return (
            // <Router>
            <Row className="admin">
                <Row className="admincontent">
                <Table columns={columns} dataSource={this.state.userlist} />
                </Row>
              
            </Row>
            // </Router>
        )
    }
}

export default Admin