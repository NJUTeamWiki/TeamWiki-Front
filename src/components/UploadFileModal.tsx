import React from 'react'
import {Row,Col,Modal,Button} from 'antd'
import { Upload, Icon, message } from 'antd';
import {serverIP} from '../utils/GlobalConstants.js'
const { Dragger } = Upload;
import * as uploadService from '../services/fileService'

// const props = {
//     name: 'file',
//     multiple: true,
//     action: `${serverIP}/`,
//     onChange(info) {
//       const { status } = info.file;
//       if (status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully.`);
//       } else if (status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//   };
class UploadFileModal extends React.Component{
    state = { visible: false,
            fileList:[] };
    
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      let data = new FormData();
      if(this.state.fileList.length==0){
          message.error("未选择文件")
      }
      else{
        data.append("file",this.state.fileList[0])
        data.append("sourceId","1"),
        data.append("sourceType","0"),
        uploadService.uploadfile(data).then(res=>{
            console.log(res);
            this.setState({
                visible: false,
              });
        })
        
      }
    
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    handleChange = info => {
        let fileList = [...info.fileList];
    
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-1);
    
    
        this.setState({ fileList });
      };
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
          onChange: this.handleChange,
          beforeUpload: file => {
            this.setState(state => ({
              fileList: [...state.fileList, file],
            }));
            return false;
          },
          fileList,
          multiple:false,
        };
        return(
            <Row className="upload_modal">   
                <Button type="primary" onClick={this.showModal}>
                     Upload
                        </Button>
                <Modal
                    title="UplodaFile"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="Upload"
                    
                >
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                    </p>
                </Dragger>
                </Modal>
            </Row>
        )
    }
}
export default UploadFileModal