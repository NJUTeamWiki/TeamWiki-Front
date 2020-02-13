import React from 'react'
import { Button, List, Typography, Dropdown,Carousel, Menu, Icon } from 'antd'
import * as FileService from '../services/fileService'
import '../less/list.less'
class ListFile  extends React.Component{
  deletefile = (data)=>{
    FileService.deletefile(data.did).then(res=>{
        this.props.refresh();
    })
  }
    render(){
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
                <List.Item actions={[<a key="list-loadmore-edit" onClick={this.deletefile.bind(this,item)}>
                  {/* <Dropdown overlay={menu} placement="bottomLeft">
                <Icon type="form" />
              </Dropdown> */}
              <Icon type="delete" />
              </a>]}
                >
                    <Typography.Text mark>i</Typography.Text> {item.dname}
                </List.Item>
            )}
        />
        )
    }
}
export default ListFile