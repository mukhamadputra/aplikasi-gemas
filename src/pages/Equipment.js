import React from "react";
import { Link } from "react-router-dom";
// import EquipList from "../components/EquipList";
import PageLayout from "../layouts/PageLayout";
import banner from "../assets/images/banner.png";
import slaveclock from "../assets/images/slaveclock.png";
import sign from "../assets/images/sign.png";
// import ReportCount from "../components/ReportCount";

const Equipment = () => {
  return (
    <PageLayout>
      <div className="equip">
        <Link to="/equip-add">
          <button>Add New</button>
        </Link>
        <h1 style={{ marginTop: "12px" }}>Equipment Page</h1>
        <ul>
          <li className="submenu">
            <Link to="/slaveclock">
              <img className="logo-equip" src={slaveclock} alt="" />
              Slave clock
            </Link>
          </li>
          <li className="submenu">
            <Link to="/digitalbanner">
              <img className="logo-equip" src={banner} alt="" />
              Digital banner
            </Link>
          </li>
          <li className="submenu" >
            <Link to="/digitalsignage">
              <img className="logo-equip" src={sign} alt="" />
              Digital signage
            </Link>
          </li>
        </ul>

        {/* <ReportCount /> */}
      </div>
    </PageLayout>
  );
};

export default Equipment;
