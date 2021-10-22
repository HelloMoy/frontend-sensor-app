import React from 'react';
import { SocketProvider } from './context/SocketContext';
import { Header } from './Header/';
import { Sidebar } from './Sidebar/';
import { RGBLedDashboard } from './RGBLedDashboard/';
import './app.css';



function App() {

  return (
    <>
      <div id="main-wrapper" className="div-wrapper">
        <header className="header">
          <Header />
        </header>
        <aside id="sidebar-element" className="sidebar">
          <Sidebar />
        </aside>
        <section className="content1">
          <SocketProvider>
            <RGBLedDashboard />
            <RGBLedDashboard />
            <RGBLedDashboard />
          </SocketProvider>
        </section>
      </div>
      <section id="sidebar-floating-button-container-id" className="sidebar-floating-button-container">
        <span className="sidebar-floating-button">&#9776;</span>
      </section>
    </>
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
