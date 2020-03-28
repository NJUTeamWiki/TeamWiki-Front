import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import React from 'react'
const { Paragraph } = Typography;
import {serverIP} from '../utils/GlobalConstants.js'
const IconLink = ({href, src, text,preview }) => (
  <Row>
  <a
    style={{
      marginRight: 16,
        
    }}
    href={preview}
    target="_blank"
  >
    <img
      style={{
        marginRight: 8,
      }}
      src={src}
      alt="start"
    />  
    {text}
  </a>
  <a  href={href}
    download="file" ><Icon type="download" /></a>
  </Row>
  
);

const content = (data:any) => {
  
    return  <div className="content">
    
        <Paragraph>
              {data.shareContent}
         </Paragraph>
          <Row className="contentLink" type="flex">
            {data.documents&&data.documents.map((item)=>{
                return  <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                    text={item.dname}
                    href={`${serverIP}/document/download/${item.did}`}
                    preview={`${serverIP}/document/preview/${item.did}`}
                    />
          })}
    </Row>
  </div>
}


const Content = ({ children }) => {
  return (
    <Row className="content" type="flex">
      <div className="main" style={{ flex: 1 }}>
        {children}
      </div>
      <div
        className="extra"
        style={{
          marginLeft: 80,
        }}
      >
        
      </div>
    </Row>
  );
};

class Post extends React.Component{
  
    render(){
       const {data} = this.props
        return(
            <PageHeader
            title={data.shareTitle}
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            className="shadow"
            tags={<Tag color="blue">精</Tag>}
            extra={[
              // <Button key="1" type="danger">
              //   <Icon type="star" />
              // </Button>,
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}>
            <Content >
              {content(data)}
            </Content>
          </PageHeader>
        )
    }
}
export default Post
