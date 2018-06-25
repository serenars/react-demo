import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom'; 
// import conf from '../../conf'
import {
    _fetch,
} from '../../fetch'
import './login.less'

const FormItem = Form.Item;

// const HOST = 'https://rest.wondershare.cn'
const PATH = '/orgs/positions'

class Login extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            redirect: false,
        }
    }

    componentDidMount() {
        this.handle_login()
    }

    handle_login() {
        _fetch({
            fetch_type: 'GET',
            path: PATH,
            param: {
                wsId: '03100003',
            },
            token: 'MDMxMDAwMDM6YzRjYTQyMzhhMGI5MjM4MjBkY2M1MDlhNmY3NTg0OWI=',
            success: rv => {

            },
            error: rv => {
                alert(1)
            },
        })
    }

    handleOnClick = () => {  
        this.setState({redirect: true});  
    }  

    render() {
        if (this.state.redirect) {  
            return <Redirect push to="/Home" />; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数  
        }  

        return (
            <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>信访</span>
                    </div>
                    <Form style={{maxWidth: '300px'}}>
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入账号" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            {/* <Checkbox>记住我</Checkbox>
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a> */}
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}} onClick={this.handleOnClick}>
                                登录
                            </Button>
                            <p style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <a href="">注册!</a>
                            </p>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;