import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';
import React from 'react'
const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
      display: 'flex',
      alignItems: 'center',
    }}
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
);

const content = (
  <div className="content">
    
    <Paragraph>
      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
      easier for designers to have a clear psychological expectation of color when adjusting colors,
      as well as facilitate communication in teams.
    </Paragraph>
    <Row className="contentLink" type="flex">
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Doc.word"
      />
    </Row>
  </div>
);

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
        return(
            <PageHeader
            title="THis is a Title"
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            className="shadow"
            tags={<Tag color="blue">精</Tag>}
            extra={[
              <Button key="3">
                {/* <IconLink 
                 src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
       
                 text="1"
                /> */}
                Operation
              </Button>,
              <Button key="2">Operation</Button>,
              <Button key="1" type="primary">
                Primary
              </Button>,
             
            ]}
            avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
          >
            <Content >
              {content}
            </Content>
          </PageHeader>
        )
    }
}
export default Post
