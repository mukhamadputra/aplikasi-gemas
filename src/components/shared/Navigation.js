import React from "react";
import { Link } from "react-router-dom";

import home from "../../assets/images/home.png";
import equip from "../../assets/images/equip.png";
import report from "../../assets/images/report.png";
import user from "../../assets/images/user.png";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">
            <img src={home} alt=""/>
          </Link>
        </li>
        <li>
          <Link to="/equip">
            <img src={equip} alt=""/>
          </Link>
        </li>
        <li>
          <Link to="/report">
            <img src={report} alt=""/>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <img src={user} alt=""/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
