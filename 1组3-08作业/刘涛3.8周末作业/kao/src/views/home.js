import React, { Component } from 'react'
import RouterView from '../router/index'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

class Home extends Component {

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header style={{ position: "relative" }}>

            <div className="logo" />
            <i style={{ lineHeight: '64px', position: "absolute", left: "30px", color: "red", fontSize: "20px" }}>猫眼专业版</i>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', position: "absolute", right: "430px" }}
            >
              <Menu.Item key="1" style={{ fontSize: "20px" }}><Link from="/home" to="/home/comprehensive">综合票房</Link></Menu.Item>
              <Menu.Item key="2" style={{ fontSize: "20px" }}><Link from="/home" to="/home/fashionable">分账票房</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <RouterView routes={this.props.routes}></RouterView>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

      </div>
    )
  }
}


export default Home