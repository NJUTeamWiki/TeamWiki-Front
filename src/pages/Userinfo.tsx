import React from 'react'
import {Row,Col,Avatar,Upload,Icon,Input,Button} from 'antd'
import '../less/user.less'
import {serverIP} from '../utils/GlobalConstants.js'
import {serverIPDownload} from '../utils/GlobalConstants.js'
import * as UserService from '../services/loginService'
import emitter from '../utils/ev.js'
class Userinfo extends React.Component{

    state={userdata:JSON.parse(localStorage.getItem("user")),
      editphone:false,
      editintro:false,
      editname:false
    
    }
    savePhone = () =>{
            let data = {username:this.state.userdata.username,
                        phone:this.refs.phone.state.value,
                        introduction:this.state.userdata.introduction
            }
            UserService.update_user(data).then(res=>
                {
                    if(res.code==1){
                        let temp = Object.assign({...this.state.userdata},{phone:this.refs.phone.state.value});
                      
                        this.setState({
                            editphone:false,
                            userdata:temp,
                        })
                        localStorage.setItem("user",JSON.stringify(temp))
                        
                    }
                }
                )
    }
    saveIntro = () => {
        let data = {username:this.state.userdata.username,
            phone:this.state.userdata.phone,
            introduction:this.refs.intro.state.value
            }
            UserService.update_user(data).then(res=>
                {
                    if(res.code==1){
                        let temp = Object.assign({...this.state.userdata},{introduction:this.refs.intro.state.value});
                      
                        this.setState({
                            editintro:false,
                            userdata:temp,
                        })
                        localStorage.setItem("user",JSON.stringify(temp))
                    }
                }
                )

    }
    saveName = () =>{
        let data = {username:this.refs.name.state.value,
            phone:this.state.userdata.phone,
            introduction:this.state.userdata.introduction
            }
            UserService.update_user(data).then(res=>
                {
                    if(res.code==1){
                        let temp = Object.assign({...this.state.userdata},{username:this.refs.name.state.value});
                        console.log(temp)
                        this.setState({
                            editname:false,
                            userdata:temp,
                        })
                        localStorage.setItem("user",JSON.stringify(temp))
                    }
                    else{

                    }
                }
    )

    }
    handleChange = (event)=>{
            if(event.file.status=="done"){
                if (event.file.response.code==1){
                    this.setState({userdata:event.file.response.data})
                    localStorage.setItem("user",JSON.stringify(event.file.response.data))
                    emitter.emit("changeUser")
                }
               
            }
            
    }
    render(){
        const { userdata }= this.state
        console.log(userdata);
        const uploadButton = (
            <div>
              <Icon type='plus' />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        return( 
            <Row className="userinfo" type="flex" justify="center" align="middle">
                <Row className="usercontent shadow">
               <Row className="item" >
                   <Col span={8} className="title">avatar:</Col><Col span={16} className="user_content">
                   <Upload
                        name="file"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        withCredentials={true}
                        action={`${serverIP}/user/avatar`}
                        onChange={this.handleChange}
                    >
                    {userdata.avatar ? <Avatar type="round" src={userdata.avatar?`${serverIPDownload}/${userdata.avatar}?${+new Date()}`:""} alt="avatar" size={60} /> : uploadButton}
                    </Upload>
                   </Col>
                </Row>
                <Row className="item" >
                   <Col span={8} className="title">email:</Col><Col span={16} className="user_content">{userdata.email}</Col>
                </Row>
                 <Row className="item" >
                   <Col span={8} className="title">name:</Col>
                   
                   {this.state.editname?
                     <Col span={16} className="user_content"> <Input ref="name" className="input" placeholder="输入名称" defaultValue={userdata.username} />
                     <Button type="primary" onClick={this.saveName} >save</Button> </Col>
                            :  
                     <Col span={16} className="user_content"> {userdata.username} <Icon onClick={()=>this.setState({editname:true})} type="edit"/>
                     </Col>
                         }       
                </Row> 
                <Row className="item" >
                   <Col span={8} className="title">phone:</Col>
                   
                     {this.state.editphone?
                     <Col span={16} className="user_content"> <Input ref="phone" className="input" placeholder="输入手机号码" defaultValue={userdata.phone} />
                     <Button type="primary" onClick={this.savePhone} >save</Button> </Col>
                            :  
                     <Col span={16} className="user_content"> {userdata.phone} <Icon onClick={()=>this.setState({editphone:true})} type="edit"/>
                     </Col>
                         }
                      
 
                </Row>
                <Row className="item" >
                   <Col span={8} className="title">introduction:</Col>
                   {this.state.editintro?
                     <Col span={16} className="user_content"> <Input ref="intro" className="input" placeholder="输入介绍" defaultValue={userdata.introduction} />
                     <Button type="primary" onClick={this.saveIntro} >save</Button> </Col>
                            :  
                     <Col span={16} className="user_content"> {userdata.introduction} <Icon onClick={()=>this.setState({editintro:true})} type="edit"/>
                     </Col>
                         }
                  
                </Row>
                
                </Row>
            </Row>
        )
    }
}
export default Userinfo