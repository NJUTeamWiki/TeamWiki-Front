import React from 'react'
import { Button, List, Typography, Dropdown,Carousel, Row,Menu, Icon,message } from 'antd'
import * as FileService from '../services/fileService'
import '../less/list.less'
import {serverIP} from '../utils/GlobalConstants.js'
class ListFile  extends React.Component{
  deletefile = (data)=>{
    FileService.deletefile(data.did).then(res=>{
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
        return(
            <List
            className="list_file"
            bordered
            dataSource={data}
            renderItem={(item: any) => (
                <List.Item actions={item.uploader==userdata.userId?[<a key="list-loadmore-edit" onClick={this.deletefile.bind(this,item)}>
                    <Icon type="delete"  />
              </a>]:[]}
                >
                  <Row style={{width:"100%"}}> <a href={`${serverIP}/storage/${item.url}`} download="file" > <Typography.Text mark>i</Typography.Text>{item.dname}</a></Row>
                </List.Item>
            )}
        />
        )
    }
}
export default ListFile