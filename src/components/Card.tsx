import React from 'react'
import {Row,Col} from 'antd'
import GitHub from '../static/img/home/github.jpg'
import '../less/card.less'
class Card extends React.Component{
    render(){
        return(
            <Col span={6} className="card" >
            <div className="box shadow">
              <div className="img"><img className="img" src={GitHub} /></div>
              <div className="name">GitHub</div>
              </div>
            </Col>
        )
    }
}
export default Card