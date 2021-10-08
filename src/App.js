import React, { useState } from 'react'
import { Guest } from './Guest';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { SocketProvider } from './context/SocketContext';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, SetCollapsed] = useState(false);

  const onCollapse = (changeStateCollapsed) => {
    SetCollapsed(changeStateCollapsed);
  };

  return (
    <div className="App">
      <SocketProvider>
        <Router>
          <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} collapsedWidth="0" breakpoint="sm">
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/home">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="/guest">
                    Guest
                  </Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                <p>Header</p>
              </Header>
              <Content style={{ margin: '0 16px' }} >
                <h1>Hello World</h1>
                <Switch>
                  <Route path="/guest" component={Guest} />
                  <Redirect to="/" />
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018</Footer>
            </Layout>
          </Layout>
        </Router>
      </SocketProvider>
    </div>
  );
}

// {<Breadcrumb style={{ margin: '16px 0' }}>
// <Breadcrumb.Item>User</Breadcrumb.Item>
// <Breadcrumb.Item>Bill</Breadcrumb.Item>
// </Breadcrumb>
// <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
// Bill is a cat.
// </div>}
export default App;
