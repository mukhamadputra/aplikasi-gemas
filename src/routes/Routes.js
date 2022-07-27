import React from "react";
import { Route, Switch } from "react-router-dom";

// Component Page
import Login from "../pages/Login";
import Home from "../pages/Home";
import Equipment from "../pages/Equipment";
import Report from "../pages/Report";
import User from "../pages/User";
import Info from "../pages/Info";

import QRScan from "../components/QRScan";
import EquipAdd from "../components/EquipAdd";
import EquipDetail from "../components/EquipDetail";
import ReportAdd from "../components/ReportAdd";
import SlaveClock from "../components/SlaveClock";
import DigitalBanner from "../components/DigitalBanner";
import DigitalSignage from "../components/DigitalSignange";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
        <Route path="/report-add/:id">
          <ReportAdd />
        </Route>
        <Route path="/equip">
          <Equipment />
        </Route>
        <Route path="/slaveclock">
          <SlaveClock />
        </Route>
        <Route path="/digitalbanner">
          <DigitalBanner />
        </Route>
        <Route path="/digitalsignage">
          <DigitalSignage />
        </Route>
        <Route path="/equip-add">
          <EquipAdd />
        </Route>
        <Route path="/equip-detail/:id">
          <EquipDetail />
        </Route>
        <Route path="/qrscan">
          <QRScan />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
