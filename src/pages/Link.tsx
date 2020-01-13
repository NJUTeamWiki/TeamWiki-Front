import React, { Children } from "react";
import GitHub from '../static/img/home/github.jpg'
import {Button,List,Typography} from 'antd'
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
               <div className="img"><img className="img" src={GitHub} /></div>
               <div className="name">GitHub</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow" >
               <div className="img"><img className="img" src={GitHub} /></div>
               <div className="name">GitHub</div>
               </div>
             </Col>
             <Col span={6} className="card" >
             <div className="box shadow">
               <div className="img"><img className="img" src={GitHub} /></div>
               <div className="name">GitHub</div>
               </div>
             </Col>
           </Row>
           <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
      <Row>
        <FileUpload />
      </Row>
       </Row>
        
      // </Router>
    )
  }
}

export default Link