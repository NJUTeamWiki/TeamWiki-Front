import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {
  BrowserRouter as Router, IndexRoute,
  withRouter,
  hashHistory
} from "react-router-dom";
import '../less/login.less'
import * as LoginService from '../services/loginService'
@withRouter
class Register extends React.Component {
  constructor(props: any) {
    super(props)
    this.state =  {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let res = LoginService.sign(values)
        console.log(res);
      }
    });
    this.props.history.push('/home/company')
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule: any, value: any, callback: (arg0: string) => void) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="content">
        <div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
      <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please input your email!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your username!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>    
        </Form.Item>
      </Form>
      </div>
      </div>
    );
}
}
const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(Register);
export default WrappedNormalRegisterForm