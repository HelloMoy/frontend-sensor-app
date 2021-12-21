import React, { useRef } from 'react';
import { SocketProvider } from './context/SocketContext';
import { Header } from './Header/';
import { Sidebar } from './Sidebar/';
import { MainHardwareMode } from './MainHardwareVersion/';
import { RGBLedDashboard } from './RGBLedDashboard/';
import { SidebarFloatinButton } from './SidebarFloatinButton/';
import { TemperatureAndHumidityDashboard } from './TemperatureAndHumidityDashboard/';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './app.css';

function App() {

  const refMainWrapper = useRef();
  const refSidebar = useRef();
  const refSidebarFloatingButton = useRef();

  const onHideSidebar = () => {
    refMainWrapper.current.classList.add('hidden-sidebar-wrapper');
    refSidebar.current.classList.add('sidebar-display-none');
    refSidebarFloatingButton.current.classList.add('show-sidebar-floating-button');

    refMainWrapper.current.classList.remove('show-sidebar-wrapper');
    refSidebar.current.classList.remove('show-sidebar-display-block');
    refSidebarFloatingButton.current.classList.remove('hidden-sidebar-floating-button');
  }

  const onShowSidebar = () => {
    refMainWrapper.current.classList.remove('hidden-sidebar-wrapper');
    refSidebar.current.classList.remove('sidebar-display-none');
    refSidebarFloatingButton.current.classList.remove('show-sidebar-floating-button');

    refMainWrapper.current.classList.add('show-sidebar-wrapper');
    refSidebar.current.classList.add('show-sidebar-display-block');
    refSidebarFloatingButton.current.classList.add('hidden-sidebar-floating-button');
  }

  return (
    <>
      <Router>
        <div className="main-background">
          <div className="div-wrapper" ref={refMainWrapper}>
            <header className="header">
              <Header />
            </header>
            <aside className="sidebar" ref={refSidebar}>
              <Sidebar onHideSidebar={onHideSidebar} />
            </aside>
            <section className="content1">

              <Switch>
                <Route path="/hardware-mode" exact>
                  <MainHardwareMode />
                </Route>

                <SocketProvider>
                  <Route path="/hardware-mode/led">
                    <RGBLedDashboard />
                  </Route>
                  <Route path="/hardware-mode/sensor">
                    <TemperatureAndHumidityDashboard />
                  </Route>
                </SocketProvider>
              </Switch>
            </section>
          </div>
          <section className="sidebar-floating-button-container" ref={refSidebarFloatingButton}>
            <SidebarFloatinButton onShowSidebar={onShowSidebar} />
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
