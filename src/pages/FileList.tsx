import React, { Children } from "react";
import Web from '../static/img/home/bg_web.jpg'
import { Button, List, Typography, Carousel, Menu, Icon,Breadcrumb } from 'antd'
const ButtonGroup = Button.Group
import { Row, Col } from 'antd'
const { SubMenu } = Menu
import * as FileService from '../services/fileService'
import Card from '../components/Card'
import ListFile from '../components/ListFile'
import '../less/filelist.less'
import UploadFileModal from '../components/UploadFileModal'
 
class FileList extends React.Component {
    constructor(props: any) {
        super(props)
        console.log(props)
        this.state = {
            filelist:[],
            selected:'list',
            name:this.getQueryVariable("name"),
            id:this.getQueryVariable("id")
        }
    }
    componentWillMount(){
          this.getknowledgefilelist()
    }
    getknowledgefilelist = ()=>{
       
        FileService.getknowledgefilelist(this.state.id).then(res=>{
            console.log(res);
            this.setState({
                filelist:res.data
            })
        })
    }
    getQueryVariable = (variable)=>{

            var query = this.props.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    if(pair[0] == variable){
                        
                        return decodeURI(pair[1]);}
            }
            return(false);
    }
    render() {   
        return (
            <Row className="filelist"> 
                <Row className="content_filelist">
                <Row > <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item><a onClick={()=>{this.props.history.push("knowledge")}}>Knowledge</a></Breadcrumb.Item>
                        <Breadcrumb.Item>
                         <span style={{color:"#2587ff"}}>{this.state.name}</span> 
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className="title">
                <ButtonGroup>
                    <Button className={this.state.selected=="list"?"selected":""} onClick={()=>{this.setState({selected:"list"})}} >List</Button>
                    <Button className={this.state.selected=="icon"?"selected":""} onClick={()=>{this.setState({selected:"icon"})}}>Icon</Button>
                </ButtonGroup> 
                <UploadFileModal refresh={this.getknowledgefilelist.bind(this)} id={this.state.id} />
                </Row>     
                   
                    <Col span={24} className="list">
                      {this.state.selected=="list"?
                      <ListFile data={this.state.filelist} refresh={this.getknowledgefilelist.bind(this)} id={this.state.id}/>:
                      <Row className="cardlist">
                       {this.state.filelist&&this.state.filelist.map((item)=><Card content={item} refresh={this.getknowledgefilelist.bind(this)}/>)
                        }
                    </Row>
                      }
                    </Col>
                </Row>
            </Row>


        )
    }
}

export default FileList