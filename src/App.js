import React, { useState } from 'react';
import { SocketProvider } from './context/SocketContext';
import { Header } from './Header/';
import { Sidebar } from './Sidebar/';
import { MainSimulationMode } from './MainSimulationMode/';
import { MainHardwareMode } from './MainHardwareVersion/';
import { RGBLedDashboard } from './RGBLedDashboard/';
import { SidebarFloatinButton } from './SidebarFloatinButton/';
import { TemperatureAndHumidityDashboard } from './TemperatureAndHumidityDashboard/';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.css';

function App() {

  const [mainWrapperClass, setMainWrapperClass] = useState('');
  const [sidebarClass, setSidebarClass] = useState('');
  const [sidebarFloatingButtonClass, setSidebarFloatingButtonClass] = useState('');

  const onHideSidebar = () => {
    setMainWrapperClass('hidden-sidebar-wrapper');
    setSidebarClass('sidebar-display-none');
    setSidebarFloatingButtonClass('show-sidebar-floating-button');
  }

  const onShowSidebar = () => {
    setMainWrapperClass('show-sidebar-wrapper');
    setSidebarClass('show-sidebar-display-block');
    setSidebarFloatingButtonClass('hidden-sidebar-floating-button');
  }

  return (
    <>
      <Router>
        <div className="main-background">
          <div className={`div-wrapper ${mainWrapperClass}`}>
            <header className="header">
              <Header />
            </header>
            <aside className={`sidebar ${sidebarClass}`}>
              <Sidebar onHideSidebar={onHideSidebar} />
            </aside>
            <section className="content1">

              <Switch>
                <Route path="/hardware-mode" exact>
                  <MainHardwareMode />
                </Route>
                <Route path="/simulation-mode" exact>
                  <MainSimulationMode />
                </Route>

                <SocketProvider>
                  <Route path="/simulation-mode/led">
                    <RGBLedDashboard socketName={'random-data'}/>
                  </Route>
                  <Route path="/simulation-mode/sensor">
                  <TemperatureAndHumidityDashboard socketName={'random-data'}/>
                  </Route>
                  <Route path="/hardware-mode/led">
                    <RGBLedDashboard socketName={'values'}/>
                  </Route>
                  <Route path="/hardware-mode/sensor">
                    <TemperatureAndHumidityDashboard socketName={'values'}/>
                  </Route>
                </SocketProvider>
              </Switch>
            </section>
          </div>
          <section className={`sidebar-floating-button-container ${sidebarFloatingButtonClass}`}>
            <SidebarFloatinButton onShowSidebar={onShowSidebar} />
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
