import React, { Children } from "react";
import GitHub from '../static/img/home/github.jpg'
import LeetCode from '../static/img/home/leetcode.svg'
import Geogle from '../static/img/home/geogle.jpg'
import ZhiHu from '../static/img/home/zhihu.jpg'
import Stack from '../static/img/home/StackOverflow.jpg'
import {Button,List,Typography} from 'antd'
import Card from '../components/Card'
import * as portalService from '../services/portalService'
import {Row,Col,Modal,Form,Input,message} from 'antd'
import '../less/home/Link.less'
import FileUpload from '../components/FileUpload'
class Link extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { visible:false,
    portallist:[]}
  }
  componentWillMount(){
    this.getPortalList()
  }
  getPortalList=()=>{
    portalService.getPortal().then(res=>{
      if(res.code==1){
        this.setState({
          portallist:res.data
        })
      }
    })
  }
      showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleOk = e => {
        console.log(e);
      
        let name = this.refs.name.state.value;
        let link = this.refs.link.state.value;
        if(name==""||link==""){
            message.error("Incomplete content")
        }
        else{
          let data = {name:name,link:link}
          portalService.createPortal(data).then(res=>{
            if(res.code==1){
              this.setState({
                visible: false,
              });
              message.success("success")
              this.getPortalList();
            }
            else{
              message.error(res.msg)
            }
          })
          
        }
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      handleSubmit = e => {
        e.preventDefault();
       
      };
     
  render() {
    const data = [
    
    ]
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
    return (
      // <Router>
       <Row className="link">
           <Row className="rowitem">
             {/* <Col span={6} className="portal" >
               <div className="box shadow">
               <a href="http://github.com" target="_blank">
               <div className="imageRow">
               <svg t="1581747570565"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1988" data-spm-anchor-id="a313x.7781069.0.i6" width="128" height="128"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#1296db" p-id="1989"></path></svg>
               </div>
               <div className="name">GitHub</div>
               </a>
               </div>
               
             </Col>
             <Col span={6} className="portal" >
             
             <div className="box shadow">
             <a href="http://leetcode.com" target="_blank">
               <div className="imageRow"><img className="img" src="https://static.leetcode-cn.com/cn-mono-assets/production/head/17df28f35bfb3292fe5bdd94b81fa456.svg "  /></div>
               <div className="name">LeetCode</div>
               </a>
               </div>
               
             </Col>
             <Col span={6} className="portal" >
            
             <div className="box shadow" >
             <a href="http://zhihu.com" target="_blank">
               <div className="imageRow">
                 <svg t="1581748027489"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3045" width="128" height="128"><path d="M544.059897 959.266898h-64.949141c-228.633593 0-415.697442-187.063849-415.697442-415.697442v-64.949141c0-228.633593 187.063849-415.697442 415.697442-415.697442h64.949141c228.633593 0 415.697442 187.063849 415.697442 415.697442v64.949141c-0.001024 228.633593-187.064873 415.697442-415.697442 415.697442z" fill="#006CE2" p-id="3046"></path><path d="M513.358696 494.912378h-84.12549c1.331051-13.311533 4.791783-49.517142 4.791783-70.01635 0-20.499208-0.26621-50.049562-0.26621-50.049563h84.65791v-13.311533c0-17.837106-7.720095-25.823412-14.110163-25.823412H357.08615s4.259363-14.642584 8.252516-29.816564c3.993153-15.175004 13.045323-36.471819 13.045323-36.471819-51.913034 3.460732-55.995265 41.974179-67.354248 76.405394-11.358984 34.431216-20.232998 51.380613-36.73803 88.917273 22.8951 0 45.523989-11.180828 55.107556-26.622042 9.583567-15.441215 13.932008-33.543507 13.932008-33.543507h51.114403v48.629434c0 17.39274-3.194522 72.056954-3.194522 72.056953h-91.225111c-15.973635 0-24.492361 40.28784-24.492361 40.28784h110.215112c-6.921465 62.473387-21.830259 87.498168-42.772809 125.833459-20.94255 38.336314-76.405395 81.907754-76.405395 81.907754 33.809717 9.583567 71.347401-2.928312 87.320012-18.103317 15.973635-15.175004 29.550354-40.998416 39.401155-60.017086 9.849777-19.01867 18.103316-53.659782 18.103317-53.659782l89.449693 110.481322s3.993153-19.966788 5.324204-32.478666c1.331051-12.512903-0.621498-21.741181-3.816021-29.19609-3.194522-7.453885-12.778089-17.748028-25.557201-32.656823-12.778089-14.908794-39.578287-43.57144-39.578287-43.57144s-13.045323 9.583567-23.16131 17.304686c7.453885-18.103316 13.399587-65.667909 13.399587-65.667909h100.808677v-16.683187c0.002048-14.551458-6.031708-24.135025-14.905722-24.135025zM750.117843 329.500632H557.019214a3.54981 3.54981 0 0 0-3.549811 3.54981v358.510375a3.54981 3.54981 0 0 0 3.549811 3.549811h33.145216l12.112563 41.530836 66.820804-41.530836h81.020046a3.54981 3.54981 0 0 0 3.54981-3.549811V333.050442a3.54981 3.54981 0 0 0-3.54981-3.54981zM713.024525 654.112211h-43.128097l-50.714064 32.212457-8.918042-32.212457h-15.441214V368.723631h118.202441V654.112211z" fill="#FFFFFF" p-id="3047"></path></svg>
               </div>
               <div className="name">ZhiHu</div>
               </a>
               </div>
              
             </Col>
             <Col span={6} className="portal" >
             
             <div className="box shadow">
             <a href="http://stackoverflow.com" target="_blank">
               <div className="imageRow">
               <svg t="1581748089386"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3522" width="128" height="128"><path d="M809.728 932.571429H170.861714V658.285714h-91.428571v365.714286h821.723428V658.285714h-91.428571v274.285715zM271.433143 633.161143l18.870857-89.709714 447.414857 94.281142-18.870857 89.161143z m58.843428-213.723429l38.290286-83.419428 414.281143 193.718857-38.290286 82.870857z m114.870858-203.446857l58.294857-70.290286L854.308571 438.857143l-58.294857 70.290286zM672 0l272.566857 366.299429-73.142857 54.857142L598.857143 54.857143zM261.705143 840.557714V749.714286h457.142857v90.843428h-457.142857z" fill="#1296db" p-id="3523"></path></svg>
               </div>
               <div className="name">StackOverflow</div>
               </a>
               </div>
               
             </Col>
             <Col span={6} className="portal" >
             
             <div className="box shadow">
             <a href="http://geogle.com" target="_blank">
               <div className="imageRow">
               <svg t="1581748156306"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4327" width="128" height="128"><path d="M123.648 178.346667C361.642667-98.602667 802.986667-43.946667 967.936 279.68h-396.501333c-71.424 0-117.546667-1.621333-167.509334 24.661333-58.709333 30.933333-102.997333 88.234667-118.485333 155.52L123.648 178.389333z" fill="#EA4335" p-id="4328"></path><path d="M341.674667 512c0 93.866667 76.330667 170.24 170.154666 170.24 93.866667 0 170.154667-76.373333 170.154667-170.24s-76.330667-170.24-170.154667-170.24c-93.866667 0-170.154667 76.373333-170.154666 170.24z" fill="#4285F4" p-id="4329"></path><path d="M577.877333 734.848c-95.530667 28.373333-207.274667-3.114667-268.501333-108.8-46.762667-80.64-170.24-295.765333-226.346667-393.557333-196.565333 301.226667-27.136 711.808 329.685334 781.866666l165.12-279.509333z" fill="#34A853" p-id="4330"></path><path d="M669.866667 341.76a233.130667 233.130667 0 0 1 43.008 286.634667c-40.576 69.973333-170.154667 288.682667-232.96 394.581333 367.658667 22.656 635.733333-337.664 514.645333-681.258667H669.866667z" fill="#FBBC05" p-id="4331"></path></svg>
               </div>
               <div className="name">Geogle</div>
               </a>
               </div>
               
             </Col> */}
             {this.state.portallist&&this.state.portallist.map((item)=>
               <Col span={6} className="portal" >
              
               <div className="box shadow" >
               <a href={item.portalLink} target="_blank">
               <Row className="imageRow" type="flex" justify="center" align="middle">
                 <Row className="imageFont">{item.portalName.substring(0,1).toUpperCase()}</Row>
                </Row>
                  <div className="name">{item.portalName}</div>
                  </a>
                 </div>
                
               </Col>
             )}
              <Col span={6} className="portal" >
             <div className="box shadow" onClick={this.showModal}>
               <Row className="add_imageRow" type="flex" justify="center" align="middle">
               <svg t="1581748203257"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5087" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1D75B0" p-id="5088"></path><path d="M713.216 462.336H310.784c-27.648 0-49.664 22.528-49.664 49.664s22.528 49.664 49.664 49.664h402.432c27.648 0 49.664-22.528 49.664-49.664s-22.528-49.664-49.664-49.664z" fill="#FFFFFF" p-id="5089"></path><path d="M462.336 310.784v402.432c0 27.648 22.528 49.664 49.664 49.664s49.664-22.528 49.664-49.664V310.784c0-27.648-22.528-49.664-49.664-49.664s-49.664 22.528-49.664 49.664z" fill="#FFFFFF" p-id="5090"></path></svg>
                </Row>
                </div>
             </Col>
           </Row>
           <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <Form {...formItemLayout} ref="form" onSubmit={this.handleSubmit}>
                   <Form.Item label="Name"
                   >
                    <Input  ref="name"/>
                      </Form.Item>
                      <Form.Item label="Link"
                      >
                        <Input ref="link" />
                      </Form.Item>
                      </Form>
              </Modal>
       </Row>
        
      // </Router>
    )
  }
}

export default Link