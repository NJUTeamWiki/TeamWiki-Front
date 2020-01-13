import React from 'react'
import { Button, List, Typography, Dropdown,Carousel, Menu, Icon } from 'antd'
import '../less/list.less'
class ListFile  extends React.Component{
    render(){
        const data = [
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
            'The employee handbook.doc',
        ];
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
                <List.Item actions={[<a key="list-loadmore-edit"><Dropdown overlay={menu} placement="bottomLeft">
                <Icon type="form" />
              </Dropdown></a>]}
                >
                    <Typography.Text mark>i</Typography.Text> {item}
                </List.Item>
            )}
        />
        )
    }
}
export default ListFile