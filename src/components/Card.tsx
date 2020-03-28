import React from 'react'
import {Row,Col,Icon,message} from 'antd'
import GitHub from '../static/img/home/github.jpg'
import {serverIP} from '../utils/GlobalConstants.js'
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
              <svg t="1581742013960"  viewBox="0 0 1024 1024" version="1.1" 
              xmlns="http://www.w3.org/2000/svg" p-id="1200" width="128" height="128">
                  <path d="M535.119473 0h69.599248v95.247413C729.226717 96.331138 853.614299 93.92286 977.881468 96.331138a40.459078 40.459078 0 0 1 44.914393 45.516463c2.047037 234.566322 0 469.614299 1.204139 703.819379-1.204139 24.082785 2.287865 50.694262-11.318909 72.248354-16.978363 12.041392-38.893697 10.837253-58.761994 12.041392h-349.200376V1023.518344h-72.248354C354.980245 990.886171 177.490122 960.541863 0 928.752587V95.488241C178.33302 63.578551 356.786453 32.511759 535.119473 0z" fill="#2A5699" p-id="1201"></path><path d="M604.718721 131.010348H988.598307v761.979304H604.718721v-95.247413h302.479774v-48.165569H604.718721v-59.002822h302.479774v-48.16557H604.718721v-59.002822h302.479774v-48.165569H604.718721v-60.206961h302.479774V428.673565H604.718721v-60.206961h302.479774v-46.96143H604.718721v-59.604892h302.479774V214.336783H604.718721zM240.827846 341.373471c22.156162-1.324553 44.19191-2.287865 66.348071-3.492003 15.533396 80.4365 31.30762 160.632173 48.165569 240.827845 13.125118-82.724365 27.695202-165.087488 41.783632-247.571025 23.239887-0.842897 46.479774-2.167451 69.719661-3.612418-26.370649 115.356538-49.369708 231.796802-78.148636 346.430856-19.386642 10.355597-48.165569 0-71.52587 1.204139C301.034807 596.169332 283.093133 517.779868 269.245532 438.667921c-13.606773 76.944497-31.30762 153.16651-46.841016 229.508937-22.39699-1.204139-44.793979-2.528692-67.311383-4.094073-19.266228-104.760113-42.024459-208.918156-60.206962-313.919097 19.868297-0.963311 39.857008-1.806209 60.206962-2.528693 12.041392 75.860771 25.648166 151.360301 36.124177 227.341487 16.135466-77.907808 32.873001-155.695202 49.610536-233.603011z" fill="#FFFFFF" p-id="1202"></path></svg>
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