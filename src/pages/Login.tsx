import React from "react";
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {
  BrowserRouter as Router, IndexRoute,
  withRouter,
  hashHistory
} from "react-router-dom";
import * as LoginService from '../services/loginService'
import '../less/login.less'
@withRouter
class Login extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
    LoginService.checklogin().then((res)=>{
      if(res.code=="1"){
        this.props.history.push('/home')
      }
  })}
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
       LoginService.login(values).then(res=>{
        if(res.code==1){
          localStorage.setItem("user",JSON.stringify(res.data));
          this.props.history.push('/home')
          message.success("登录成功");
        }
        else{
          message.error(res.msg);
        }
       
       })
      }
    });
   
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login_content">
        <div className="login">
         
      <Form onSubmit={this.handleSubmit} className="login-form">
      <Form.Item>
        <span className="webtitle">TEAM WIKI </span> 
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{  type: 'email',required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="/#/register">register now!</a>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm