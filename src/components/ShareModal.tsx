import React from 'react'
import {Row,Col,Modal,Button,Form} from 'antd'
import { Upload, Icon, message,Input } from 'antd';
import {serverIP} from '../utils/GlobalConstants.js'
import * as uploadService from '../services/shareService'
const { TextArea } = Input;
class ShareModal extends React.Component{
    state = { visible: false,
            fileList:[],
            title:"",
          content:"" };
    
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
      const {fileList,title,content} = this.state;
     
      if(title!=""&&content!=""){
      var formdata = new FormData();
      fileList.forEach(file => {
        formdata.append('files', file);
      });
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
    
    render(){
      const {  fileList } = this.state;
      const props = {
        onRemove: file => {
          this.setState(state => {
            const index = state.fileList.indexOf(file);
            const newFileList = state.fileList.slice();
            newFileList.splice(index, 1);
            return {
              fileList: newFileList,
            };
          });
        },
        beforeUpload: file => {
          this.setState(state => ({
            fileList: [...state.fileList, file],
          }));
          return false;
        },
        fileList,
      };
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
       
        return(
            <Row className="upload_modal">   
                <Button type="primary" onClick={this.showModal}>
                     Share
                        </Button>
                <Modal
                    title="Share"
                    visible={this.state.visible}
                    onOk={this.upload}
                    onCancel={this.handleCancel}
                    okText="Share"   
                >
                 <Form {...formItemLayout}>
                   <Form.Item label="Title"
                   >
                    <Input  ref="title" onChange={(e)=>{this.setState({title:e.target.value})}}/>
                      </Form.Item>
                      <Form.Item label="Content"
                      >
                      <TextArea ref="content"  onChange={(e)=>{this.setState({content:e.target.value})}}
                       autoSize={{ minRows: 8, maxRows: 10 }} />
                      </Form.Item>
                      <Form.Item label="File"
                      >
                        {/* <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                             
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                              band files
                            </p>
                          </Dragger> */}
                           <Upload {...props}>
                                <Button>
                                  Select File
                                </Button>
                              </Upload>
                      </Form.Item>
                      </Form>
                      
               
                </Modal>
            </Row>
        )
    }
}
export default ShareModal