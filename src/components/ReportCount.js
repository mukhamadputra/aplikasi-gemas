import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReportCount = () => {
  const ReportCountList = () => {
    const [equipments, setEquipments] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://192.168.43.230:3001/api/reportcount");
        const data = await response.json();
        setEquipments({ data });
      }
      fetchData();
    }, []);

    let number = 1;
    const listItems =
      equipments &&
      equipments.data
      .map((equip) => {
        return (
          <tr key={equip.id}>
            <td>{number++}</td>
            <td>{equip.category}</td>
            <td><Link to={`/equip-detail/${equip.id}`}>{equip.loc}</Link></td>
            <td>{equip.total}</td>
          </tr>
        );
      });
    return (
      <div className="equip-list">
        <h4>Report Count</h4>
        <div style={{ overflow: "scroll", maxHeight: "400px" }}>
          <table>
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Location</th>
              <th>Total</th>
            </tr>
            {listItems}
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* <h4 style={{ marginTop: "12px" }}>Digital Banner</h4> */}
      <ReportCountList />
    </div>
  );
};

export default ReportCount;
