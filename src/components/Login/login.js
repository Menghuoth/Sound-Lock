import React from 'react';

import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link} from "react-router-dom";

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 500, height: 200,marginLeft:500,marginTop:100}}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{marginTop:0}}>
                        Log in
                    </Button>
                    <Form.Item>
                        <Link to="/register">register now!</Link>
                    </Form.Item>
                </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(LoginForm);

export default WrappedNormalLoginForm;