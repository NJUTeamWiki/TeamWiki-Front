import React from 'react'
import { Upload, Icon, message } from 'antd';
const { Dragger } = Upload;
 class FileUpload extends React.Component{
    state = {
        
      };
 
    render(){
        const props = {
            name: 'file',
            multiple: true,
            action: 'http://172.19.240.202:8088/knowledge',
            onChange(info) {
              const { status } = info.file;
              if (status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
              } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
        return(
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
        )
    }
}
export default FileUpload