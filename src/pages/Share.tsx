import React, { Children } from "react";
import Web from '../static/img/home/bg_web.jpg'
import { Button, List, Typography, Carousel, Menu, Icon,Radio,Tabs ,message} from 'antd'
import { Row, Col } from 'antd'
const { SubMenu } = Menu
const { TabPane } = Tabs;
import ShareModal from '../components/ShareModal'
import * as ShareService from '../services/shareService'
import ListFile from '../components/ListFile'
import '../less/share.less'
import Post from '../components/Post'
import FileUpload from '../components/FileUpload'
class Share extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            shareList:[]
        }
    }
    componentWillMount = () =>{
        this.getShareList()
    }
    getShareList = () =>{
        ShareService.getShare().then(res=>{
            if(res.code==1){
                this.setState({
                    shareList:res.data
                })
            }
            else{
                message.error(res.msg)
            }
        })
    }
    deleteShare = (id)=>{
        ShareService.deleteShare(id).then(res=>{
            if(res.code==1){
                this.getShareList();
                message.success(res.msg)
            }
            else{
                message.error(res.msg)
            }
        })
    }
    render() {
        const userId =JSON.parse(localStorage.getItem("user")).userId
        return (
            <Row className="share">
            <Tabs defaultActiveKey="1" className="tabs" tabBarExtraContent={<ShareModal refresh={this.getShareList.bind(this)}/>}>
            <TabPane tab="All Shares" key="1">
                <Row className="content_share"> 
                    {this.state.shareList&&this.state.shareList.map((item)=><Post delete={false} deleteaction={this.deleteShare.bind(this)} data={item}/>)}
                </Row>
            </TabPane>
            <TabPane tab="My Shares" key="2">
                <Row className="content_share">
                <Row className="content_share"> 
                    {this.state.shareList&&this.state.shareList.filter((item)=> item.shareUser==userId).map((item)=><Post deleteaction={this.deleteShare.bind(this)} delete={true} data={item}/>)}
                </Row>
                </Row>
            </TabPane>
          </Tabs>
           </Row>
        )
    }
}

export default Share