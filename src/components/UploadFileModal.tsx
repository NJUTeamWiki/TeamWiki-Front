import React from 'react'
import {Row,Col,Modal,Button} from 'antd'
import { Upload, Icon, message } from 'antd';
import {serverIP} from '../utils/GlobalConstants.js'
const { Dragger } = Upload;
import * as uploadService from '../services/fileService'
class UploadFileModal extends React.Component{
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
      if(this.refs.infile.files[0]){
      var formdata = new FormData();
      formdata.append("file",this.refs.infile.files[0]);
      formdata.append("knowledgeId",this.props.id);
      uploadService.uploadfile(formdata,(res)=>{
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
      message.error('no file selected')
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
        const {  fileList } = this.state;
        return(
            <Row className="upload_modal">   
                <Button type="primary" onClick={this.showModal}>
                     Upload
                        </Button>
                <Modal
                    title="UplodaFile"
                    visible={this.state.visible}
                    onOk={this.upload}
                    onCancel={this.handleCancel}
                    okText="Upload"
                    
                >
                {/* <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                </Dragger> */}
                <input ref='infile' type="file" />
                </Modal>
            </Row>
        )
    }
}
export default UploadFileModal