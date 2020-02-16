import React from 'react'
import {Row,Col} from 'antd'
import GitHub from '../static/img/home/github.jpg'
import {serverIP} from '../utils/GlobalConstants.js'
import '../less/book.less'
class Book extends React.Component{
    render(){
        const { content } = this.props
        return(
            <Col span={6} className="book" >
            <a  download="file">
                <div className="box shadow">
              <div className="img">
              <svg t="1581742089492" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1959" width="128" height="128"><path d="M896 128l0 832L224 960c-53.024 0-96-42.976-96-96 0-53.024 42.976-96 96-96l608 0L832 0 192 0C121.6 0 64 57.6 64 128l0 768c0 70.4 57.6 128 128 128l768 0L960 128 896 128zM256 832 832 832 832 896 256 896z" p-id="1960" fill="#1296db"></path></svg>
              </div>
              <div className="name">content.dname</div>
              </div>
              </a>
            </Col>
        )
    }
}
export default Book