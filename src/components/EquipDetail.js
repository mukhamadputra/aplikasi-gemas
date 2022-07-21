import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import equipImage from "../assets/images/no-image.png";
import ReportCategory from "./ReportCategory";
// import ReportList from "./ReportList";

const EquipDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const [currentEquipment, setCurrentEquipment] = useState({
    category: "",
    loc: "",
    network: "",
    status: "",
    mac_sn: "",
    th: ""
  });

  useEffect(() => {
    const equipmentId = location.pathname.replace("/equip-detail/", "");

    async function fetchData() {
      const response = await fetch(
        `http://192.168.43.230:3001/api/equipment/${equipmentId}`
      );
      const data = await response.json();
      setCurrentEquipment(data[0]);
      // console.log(currentEquipment);
    }
    fetchData();
  }, []);

  // const handleDeleteEquipment = () => {
  //   const options = {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   };
  //   async function deleteData() {
  //     const response = await fetch(
  //       `http:/localhost:3001/api/equipment/${id}`,
  //       options
  //     );
  //     if (response.ok) {
  //       history.push("/equip");
  //     }
  //   }
  //   deleteData();
  // };

  const { id, category, loc, network, status, mac_sn, th } = currentEquipment;

  return (
    <div className="container">
      <Link to="/equip">
        <button>Back</button>
      </Link>
      <h4 style={{ margin: "12px 0" }}>Equipment Detail</h4>
      <img src={equipImage} alt="" />
      <li>Id: {id}</li>
      <li>Category: {category}</li>
      <li>Year: {th}</li>
      <li>Location: {loc}</li>
      <li>MAC/SN: {mac_sn}</li>
      <li>Network: {network}</li>
      <li>Status: {status}</li>
      {/* <button onClick={handleDeleteEquipment}>Delete</button> */}
      {/* <ReportList /> */}
      <Link
        to={`/report-add/${id}`}
        style={{ position: "absolute", left: "280px" }}
      >
        <button>New Report</button>
      </Link>
      <ReportCategory />
    </div>
  );
};

export default EquipDetail;
