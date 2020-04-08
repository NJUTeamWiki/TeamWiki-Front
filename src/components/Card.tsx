import React from 'react'
import {Row,Col,Icon,message} from 'antd'
import GitHub from '../static/img/home/github.jpg'
import {serverIP} from '../utils/GlobalConstants.js'
import PDF from '../static/img/png/PDF.png'
import Word from '../static/img/png/WORD.png'
import XLS from '../static/img/png/xlsm.png'
import PPT from '../static/img/png/ppt.png'
import * as FileService from '../services/fileService'
import '../less/card.less'
class Card extends React.Component{
    delete = (e) =>{
        e.stopPropagation()
        FileService.deletefile(this.props.content.did).then(res=>{
            if(res.code==1){
              this.props.refresh();
              message.success('delete success')
            }
            else {
              message.error(res.msg)
            }
             
      
          })
    }
    getIcon = (name) =>{
      let prefix = name.split(".").pop();
      console.log(prefix)
      switch (prefix){
        case 'doc':
          return Word;
        case 'docx':
            return Word;  
        case 'xlsx':
            return XLS;
        case 'xls':
            return XLS;
        case 'pdf':
          return PDF
        case 'ppt':
          return PPT
        default:
          return Word;
      }
      return Word;
    }
    render(){
        const { content } = this.props
        const userdata = JSON.parse(localStorage.getItem("user"));
        return(
            <Col span={6} className="card" >        
             <div className="box shadow">
             {content.uploader==userdata.userId?
          <Row className="delete" >
            <a href={`${serverIP}/document/download/${content.did}`} download="file">
              <Icon type='download'  />
              </a>
              <Icon onClick={this.delete}  type="delete" theme="filled" />
            </Row>:
           <Row className="delete" >
             <a href={`${serverIP}/document/download/${content.did}`} download="file">
               <Icon type='download'   />
             </a>
             </Row>
             }
               
              <div className="img">
                <img src={this.getIcon(content.dname)} />
                </div>
              <a target="_blank" href={`${serverIP}/document/preview/${content.did}`} download="file">
              <div className="name" title={content.dname} >{content.dname}</div>
              </a>
              </div>
              
            </Col>
        )
    }
}
export default Card