import React from 'react'
import {Row,Col,Modal,Button,Form} from 'antd'
import { Upload, Icon, message,Input } from 'antd';
import {serverIP} from '../utils/GlobalConstants.js'
const { Dragger } = Upload;
import * as uploadService from '../services/shareService'
class ShareModal extends React.Component{
    state = { visible: false,
            fileList:[] };
    
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    upload = ()=>{
      let title = this.refs.title.state.value
      let content = this.refs.content.state.value
      if(this.refs.infile.files[0]&&title!=""&&content!=""){
      var formdata = new FormData();
      formdata.append("file",this.refs.infile.files[0]);
      formdata.append("title",title);
      formdata.append("content",content)
      uploadService.createShare(formdata,(res)=>{
        if(res.code==1){
          this.setState({
            visible:false,
          })
          message.success('upload success')
          this.props.refresh();
        }
        else{
          message.error(res.msg)
        }
      });
    }
    else{
      message.error('Incomplete Content')
    }
    }
    handleChange = info => {
        let fileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-1);
    
    
        this.setState({ fileList });
      };
    render(){
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 6 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 18 },
            },
          };
        const {  fileList } = this.state;
        return(
            <Row className="upload_modal">   
                <Button type="primary" onClick={this.showModal}>
                     Share
                        </Button>
                <Modal
                    title="UplodaFile"
                    visible={this.state.visible}
                    onOk={this.upload}
                    onCancel={this.handleCancel}
                    okText="Upload"   
                >
                 <Form {...formItemLayout}>
                   <Form.Item label="Title"
                   >
                    <Input  ref="title"/>
                      </Form.Item>
                      <Form.Item label="Content"
                      >
                        <Input ref="content" />
                      </Form.Item>
                      <Form.Item label="File"
                      >
                        <input ref='infile' type="file" />
                      </Form.Item>
                      </Form>
                      
               
                </Modal>
            </Row>
        )
    }
}
export default ShareModal