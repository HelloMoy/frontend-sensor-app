import React from 'react';
import { SocketProvider } from './context/SocketContext';
import { Header } from './Header/';
import { Sidebar } from './Sidebar/';
import { RGBLedDashboard } from './RGBLedDashboard/';
import './app.css';



function App() {

  return (
    <div className="main-wrapper">
      <SocketProvider>
        <header className="main-header">
          <Header />
        </header>
        <nav className="main-navbar">

          <Sidebar />
        </nav>
        <content className="main-dashboard">
          <RGBLedDashboard />
          <RGBLedDashboard />
          <RGBLedDashboard />
        </content>
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
