import React from 'react'
import {Row,Col,Icon,Modal,Input} from 'antd'
import '../less/knowledge.less'
import * as KnowledgeService from '../services/knowledgelService'
class Knowledge extends React.Component{
    state={knowledgelist:[]
        ,visible:false,
        category:1,
        }
        showModal = (type) => {
            this.setState({
              visible: true,
              category:type,
            });
          };
        
          handleOk = e => {
            console.log(e);
            console.log(this.refs.name.state.value);
            let data={
                "categoryId":this.state.category,
                "knowledgeName":this.refs.name.state.value,
            }
            KnowledgeService.createKnowledge(data).then(res=>{
                if(res.code==1){
                    console.log("添加成功")
                    this.getKnowledgeList();
                }
            }    
                )
            this.setState({
              visible: false,
            });
           
          };
        
          handleCancel = e => {
            console.log(e);
            this.setState({
              visible: false,
            });
          };
    componentWillMount(){
       this.getKnowledgeList()
    }
    getKnowledgeList=()=>{
        // KnowledgeService.getKnowledgelist().then(res=>{
        //     console.log(res);
        //     this.setState({
        //         knowledgelist:res.data
        //     })
        // })
        KnowledgeService.getKnowledgelist().then(res=>{
            this.setState({
                      knowledgelist:res.data
                   })
        })
    }
    render(){
        const {knowledgelist} = this.state
        return(
            <Row className="knowledge">
                <Row className="firstday">
                    <Row className="title">First Day<Icon className="icon" onClick={this.showModal.bind(this,1)} type="plus-circle" /></Row>
                    <Row className="itemlist" >
                        {knowledgelist&&knowledgelist.filter((item)=>item.category==1).map((item,index)=>
                        <Col span={8} key={index} onClick={()=>{this.props.history.push(`filelist?name=${item.kname}&&id=${item.kid}`)}} className="item"><Row className="name">{item.kname}</Row></Col>
                        )}
                        {/* <Col span={8} className="item"><Row className="name">Company Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Team  Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Projects Introduction</Row></Col>
                        <Col span={8} className="item"><Row className="name">Office Environment & Facilities</Row></Col>
                        <Col span={8} className="item"><Row className="name">Development Environment Setup</Row></Col>
                        <Col span={8} className="item"><Row className="name">Accounts</Row></Col>
                        <Col span={8} className="item"><Row className="name">Permissions</Row></Col> */}
                    </Row>
                </Row>
                <Row className="firstday">
                    <Row className="title">Workflow<Icon className="icon" onClick={this.showModal.bind(this,2)} type="plus-circle" /></Row>
                    <Row className="itemlist">
                    {knowledgelist&&knowledgelist.filter((item)=>item.category==2).map((item,index)=>
                        <Col span={8} key={index} className="item"><Row className="name">{item.kname}</Row></Col>
                        )}
                    </Row>
                </Row>
                <Row className="firstday">
                    <Row className="title">Books</Row>
                    <Row className="itemlist">
                        <Col span={8} className="item"><Row className="name">Head First Java</Row></Col>
                    </Row>
                </Row>
                    <Modal
                           title="Add Knowledge "
                           visible={this.state.visible}
                           onOk={this.handleOk}
                           onCancel={this.handleCancel}
                       >
                           <Input ref="name" placeholder="输入名称" />
                       </Modal>
            </Row>
        )
    }
}
export default Knowledge