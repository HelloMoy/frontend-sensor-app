import React from 'react';
import { SocketProvider } from './context/SocketContext';
import { Header } from './Header/';
import { RGBLedDashboard } from './RGBLedDashboard/';



function App() {

  return (
    <div className="App">
      <SocketProvider>
        <Header />
        <RGBLedDashboard />
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
