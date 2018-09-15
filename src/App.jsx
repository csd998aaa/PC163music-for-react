import React, { Component } from "react";

import { Row, Col } from "antd";
import Searcher from './components/Searcher'
import User from "./components/User";
import Banner from './components/Banner';
import SongContent from './components/SongContent'
import { Layout, Menu, Breadcrumb, Icon, BackTop } from 'antd';
import skPlayer from 'skPlayer';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        var player = new skPlayer({
            autoplay: false,
            //可选项,自动播放,默认为false,true/false
            listshow: true,
            //可选项,列表显示,默认为true,true/false
            mode: 'listloop',
            //可选项,循环模式,默认为'listloop'
            //'listloop',列表循环
            //'singleloop',单曲循环
            music: {
                //必需项,音乐配置
                type: 'cloud',
                //必需项,网易云方式指定填'cloud'
                source: 317921676
                //必需项,网易云音乐歌单id
                //登录网易云网页版,在网页地址中拿到
                // ... playlist?id=317921676
            }
        });
        
    }
    render() {
        return (
            <Layout>
                <Header className="header-wrap" >
                    <Row>
                        <Col md={5} xs={5}>
                            <h2><img src={require('./public/images/logo.png')} alt="logo" />网易云音乐</h2>
                        </Col>
                        <Col md={8} xs={19}>
                            <Searcher />
                        </Col>
                        <Col md={11} xs={0}>
                            <User />
                            <div className="other hidden-xs">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <svg className="icon" aria-hidden="true">
                                                <use href="#icon-clothes-copy"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg className="icon" aria-hidden="true">
                                                <use href="#icon-youxiang"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <svg className="icon" aria-hidden="true">
                                                <use href="#icon-shezhi"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider className="hidden-sm" width={220} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="laptop" />推荐</span>}>
                                <Menu.Item key="1">发现音乐</Menu.Item>
                                <Menu.Item key="2">私人FM</Menu.Item>
                                <Menu.Item key="3">MV</Menu.Item>
                                <Menu.Item key="4">朋友</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="customer-service" />我的音乐</span>}>
                                <Menu.Item key="5">本地音乐</Menu.Item>
                                <Menu.Item key="6">下载管理</Menu.Item>
                                <Menu.Item key="7">我的音乐云盘</Menu.Item>

                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="heart-o" />创建的歌单</span>}>
                                <Menu.Item key="8">我喜欢的音乐</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification" />收藏的歌单</span>}>
                                <Menu.Item key="9">常听歌单</Menu.Item>
                            </SubMenu>
                        </Menu>

                    </Sider>
                    <Content className="Content-wrap">
                        <Row>
                            <Col sm={24}>
                                <div className="tab-wrap">
                                    <div className="tab-list">
                                        <ul className="hidden-xs">
                                            <li className="active"><a href="#">个性推荐</a></li>
                                            <li><a href="#">歌单</a></li>
                                            <li><a href="#">主播电台</a></li>
                                            <li><a href="#">排行榜</a></li>
                                            <li><a href="#">歌手</a></li>
                                            <li><a href="#">最新音乐</a></li>
                                        </ul>
                                        <ul className="visible-xs">
                                            <li className="active"><a href="#">音乐</a></li>
                                            <li><a href="#">视频</a></li>
                                            <li><a href="#">电台</a></li>
                                        </ul>
                                    </div>
                                    <div className=""></div>
                                </div>
                                <div className="cont-container">
                                    <div className="banner-wrap">
                                        <Banner />
                                    </div>
                                    <div className="song-wrap">
                                        <SongContent />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <ul>
                                        <li>版权所有：csd</li>

                                    </ul>

                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <BackTop />
                <Footer className="footer" >
                    <div className="audio-container">
                        <div id="skPlayer"></div>
                    </div>

                </Footer>
            </Layout>

        )
    }
}
export default App;