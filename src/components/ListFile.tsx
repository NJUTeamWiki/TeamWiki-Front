import React from 'react'
import { Button, Col, List, Typography, Dropdown, Carousel, Row, Menu, Icon, message } from 'antd'
import * as FileService from '../services/fileService'
import '../less/list.less'
import Word from '../static/img/icon/word.png'
import XLS from '../static/img/icon/xlsx.png'
import PDF from '../static/img/icon/PDF.png'
import PPT from '../static/img/icon/PPT.png'

import { serverIP } from '../utils/GlobalConstants.js'
class ListFile extends React.Component {
  deletefile = (data) => {
    FileService.deletefile(data.did).then(res => {
      if (res.code == 1) {
        this.props.refresh();
        message.success('delete success')
      }
      else {
        message.error(res.msg)
      }


    })
  }
  getIcon = (name) => {
    let prefix = name.split(".").pop();
    console.log(prefix)
    switch (prefix) {
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
  render() {
    const userdata = JSON.parse(localStorage.getItem("user"))
    let data = this.props.data;
    const menu = (
      <Menu>
        <Menu.Item>
          <a  >
            更新
                </a>
        </Menu.Item>
        <Menu.Item>
          <a>
            删除
                </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <List
        className="list_file"
        bordered
        header={ <Row style={{ width: "100%" }}>
          <span className="list_name" style={{width:"58%"}}>文件名</span>
          <span className="list_item" style={{width:"16%"}}>上传者</span>
          <span className="list_item">时间</span>
      </Row>}
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item actions={item.uploader == userdata.userId ?
            [
              <a href={`${serverIP}/document/download/${item.did}`} download="file" >
                <Icon type="download" /> </a>, <a key="list-loadmore-edit" onClick={this.deletefile.bind(this, item)}>
                <Icon type="delete" />
              </a>
            ] : 
            [<a href={`${serverIP}/document/download/${item.did}`} download="file" >
              <Icon type="download" /> </a>]
            }>
            <Row style={{ width: "100%" }}>
            <span className="list_name">
              <a target='_blank' href={`${serverIP}/document/preview/${item.did}`} download="file" className="file_a">
                <img src={this.getIcon(item.dname)} className="img" /><span>{item.dname}</span>
              </a>
              </span>
              <span className="list_item">{item.uploaderName}</span>
              <span className="list_item">{item.modifiedTime.replace("T", " ")}</span>
            </Row>
          </List.Item>
        )}
      />
    )
  }
}
export default ListFile