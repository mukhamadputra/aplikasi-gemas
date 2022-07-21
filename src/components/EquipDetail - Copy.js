import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import equipImage from "../assets/images/no-image.png";
import ReportList from "./ReportList";

const EquipDetail = () => {
  const location = useLocation();
  const [state, setState] = useState({
    category: "",
    loc: "",
    network: "",
    status: "",
  });

  useEffect(() => {
    const existing = localStorage.getItem("equipments");
    const equipments = existing ? JSON.parse(existing) : [];
    const equipId = location.pathname.replace("/equip-detail/", "");
    const currentEquip = equipments.filter((equip) => equip.id === equipId);
    setState(currentEquip[0]);
    console.log(equipId);
  }, []);

  const { id, category, loc, network, status } = state;

  return (
    <div className="container">
      <Link to="/equip">
        <button>Back</button>
      </Link>
      <Link
        to={`/report-add/${id}`}
        style={{ position: "relative", left: "150px" }}
      >
        <button>New Report</button>
      </Link>
      <h4 style={{ margin: "12px 0" }}>Equipment Detail</h4>
      <img src={equipImage} />
      <li>Id: {id}</li>
      <li>Category: {category}</li>
      <li>Location: {loc}</li>
      <li>Network: {network}</li>
      <li>Status: {status}</li>
      <ReportList />
    </div>
  );
};

export default EquipDetail;
