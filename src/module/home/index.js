import R from 'ramda';

import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { 
    Link, 
    Route, 
} from 'react-router-dom';
import User_list from '../user_list'
import User_upload from '../user_upload'
import 'antd/dist/antd.css';
// import logo from '../logo.svg';
import '../index.less'
const { Header, Content, Footer, Sider } = Layout;



//自定义组件SiderDemo
class Home extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        R.reverse([1,2])
    }
    
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    // collapsedWidth={0}
                    collapsed={this.state.collapsed}
                    style={{background: '#fff'}}
                >
                    <div className="logo" />
                    <Menu theme="ligt" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            {/* <Icon type="user" /> */}
                            <span className="nav-text">用户列表</span>
                            <Link to="/user_list">用户列表</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            {/* <Icon type="video-camera" /> */}
                            <span className="nav-text">用户信息导入</span>
                            <Link to="/user_upload">用户信息导入</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span style={{color:'#000', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                        <span style={{color:'#000', paddingLeft:'2%', fontSize:'1.4em'}}></span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        {/* <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item></Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>
                        </Breadcrumb> */}
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                            <Route path="/user_list" component={User_list}/>
                            <Route path="/user_upload" component={User_upload}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
    
//输出组件
export default Home;