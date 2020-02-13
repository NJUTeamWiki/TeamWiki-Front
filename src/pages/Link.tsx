import React, { Children } from "react";
import GitHub from '../static/img/home/github.jpg'
import LeetCode from '../static/img/home/zhihu.jpg'
import Geogle from '../static/img/home/geogle.jpg'
import ZhiHu from '../static/img/home/zhihu.jpg'
import Stack from '../static/img/home/StackOverflow.jpg'
import {Button,List,Typography} from 'antd'
import Card from '../components/Card'
import {Row,Col} from 'antd'
import '../less/home/Link.less'
import FileUpload from '../components/FileUpload'
class Link extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  render() {
    const data = [
    
    ]
    return (
      // <Router>
       <Row className="link">
           <Row className="rowitem">
             <Col span={6} className="card" >
               <div className="box shadow">
               <div className="img"><img className="img" src={GitHub} /></div>
               <div className="name">GitHub</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow">
               <div className="img"><img className="img" src={LeetCode} /></div>
               <div className="name">LeetCode</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow" >
               <div className="img"><img className="img" src={ZhiHu} /></div>
               <div className="name">ZhiHu</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow">
               <div className="img"><img className="img" src={Stack} /></div>
               <div className="name">StackOverflow</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow">
               <div className="img"><img className="img" src={Geogle} /></div>
               <div className="name">Geogle</div>
               </div>
             </Col>
           </Row>
  
       </Row>
        
      // </Router>
    )
  }
}

export default Link