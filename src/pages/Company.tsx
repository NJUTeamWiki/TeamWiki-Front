import React, { Children } from "react";
import Web from '../static/img/home/avatar.png'
import { Button, List, Typography, Carousel, Menu, Icon,Avatar,message } from 'antd'
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import Book from '../components/Book'
import Ava from '../static/img/home/avatar.png'
import {serverIPDownload} from '../utils/GlobalConstants'
import {serverIP} from '../utils/GlobalConstants'
import ListFile from '../components/ListFile'
import * as UserService from '../services/loginService'
import * as KnowledgeServices from '../services/knowledgelService'
import '../less/firstday/home.less'
import FileUpload from '../components/FileUpload'
import { Collapse } from 'antd';
const { Panel } = Collapse;
class Company extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            userlist:[],
            recommend:[],
            actions:[{
                "uid": "xxxx",
                "user": "xuyangchen",
                "avatar": "xxxxx",
                "action": "Create",
                "did": "xxxxxxxxx",
                "dname": "Test",
                "timestamp": "xxxxxx"
               },{
                "uid": "xxxx",
                "user": "xuyangchen",
                "avatar": "xxxxx",
                "action": "Create",
                "did": "xxxxxxxxx",
                "dname": "Test",
                "timestamp": "xxxxxx"
               }],
               
        }
    }
    componentDidMount(){
        UserService.getUser().then(res=>{
            if(res.code==1){
                this.setState({
                    userlist:res.data
                })
            }
            else{
               
            }
        }
    
    )
    KnowledgeServices.getRecommend().then(
        res=>{
            if(res.code==1){
                this.setState({
                    recommend:res.data
                })
            }
            else{
               
            }
        }
    )
    }
    
    render() {
        const {userlist} = this.state
        const userdata = JSON.parse(localStorage.getItem("user"));
        return (
            <Row className="home_page" >
            <Col span={12} className="home_first">
              <Row className="home_title">
                <Row>Welcome to WIKI!</Row>
                <Row>This is the team introduction. Can be edited by administrator.</Row>
              </Row>
              <Row className="member">
                  <Row className="title">Team Members</Row>
                  <Row className="item">
                        <Col span={3} className="title">Leader</Col>
                        <Col span={20}>
                            {userlist&&userlist.filter((item)=>item.role==1).map((item)=>
                             <Row className="item_avatar" ><Avatar src={item.avatar?`${serverIPDownload}/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>{item.username}</span></Row>
                            )}
                           
                        </Col>
                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">Guru</Col>
                        <Col span={20}>
                            {userlist&&userlist.filter((item)=>item.role==2).map((item)=>
                             <Row className="item_avatar"><Avatar src={item.avatar?`${serverIPDownload}/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>{item.username}</span></Row>
                            )}
                          
                            </Col>

                   </Row>
                   <Row className="item">
                        <Col span={3} className="title">NewComer</Col>
                        <Col span={20}>
                        {userlist&&userlist.filter((item)=>item.role==3).map((item)=>
                             <Row className="item_avatar"><Avatar src={item.avatar?`${serverIPDownload}/${item.avatar}`:Web} size={50} style={{margin:"0 auto"}} /><span>{item.username}</span></Row>
                            )}
                              </Col>
                   </Row>
                  
              </Row>
            </Col>
            <Col span={12} style={{height:"100%"}} >
              {userdata.role=="1"?              
              <Row className="recommend" >
                    <Row className="title">Recommend Reading</Row>
                    <Row className="cardlist">
                       {this.state.recommend?
                       <Collapse>
                       {this.state.recommend.map((knowledge,index)=>
                       <Panel header={knowledge.kname} key={index}>
                          <List
                                className="list_file"
                                bordered
                                dataSource={knowledge.documents}
                                renderItem={(item: any) => (
                                    <List.Item actions={[<a  href={`${serverIP}/document/download/${item.did}`} download="file" >
                                <Icon type="download"/> </a>  ]}>
                                <Row style={{width:"100%"}}> <a target='_blank' href={`${serverIP}/document/preview/${item.did}`} download="file" >
                                    {item.dname}</a>
                                </Row>
                                    </List.Item>
                                    )}
                            />

                        </Panel>
                       )}
                       </Collapse>
                      :
                      <h4>No Recommend</h4>
                      }
                    </Row>
                 
              </Row>:
              <Row className="recommend" >
                   <Row className="title">History</Row>
                        <List
                                className="list_file"
                               
                                dataSource={this.state.actions}
                                renderItem={(item: any) => (
                                    <List.Item actions={[]}>
                                <Row style={{width:"100%"}}> 
                                <Avatar style={{cursor:"pointer",marginRight:10}} src={item.avatar?`${serverIPDownload}/${item.avatar}`:Ava} size={32} />
                                <span className="user">{item.user}</span> <span className="action">{item.action} </span>
                                <a target='_blank' href={`${serverIP}/document/preview/${item.did}`}  >
                                {item.dname}</a>
                                <span className="time">{item.timestamp}</span>
                                </Row>
                                </List.Item>
                                )}
                        />
              </Row>}
              </Col>
              </Row>


        )
    }
}

export default Company