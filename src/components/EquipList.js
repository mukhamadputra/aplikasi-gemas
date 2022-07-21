import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EquipmentList = () => {
  const [equipments, setEquipments] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://192.168.43.230:3001/api/equipments");
      const data = await response.json();
      setEquipments({ data });
    }
    fetchData();
  }, []);

  const listItems =
    equipments &&
    equipments.data.map((equip) => {
      return (
        <tr key={equip.id}>
          {/* <td>{number++}</td> */}
          <td>
            <Link to={`/equip-detail/${equip.id}`}>{equip.loc}</Link>
          </td>
          <td>{equip.category}</td>
          <td>{equip.status}</td>
        </tr>
      );
    });
  return (
    <div className="equip-list">
      <h4>Equipment List</h4>
      <div style={{ overflow: "scroll", maxHeight: "500px" }}>
        <table>
          <tr>
            {/* <th>No</th> */}
            <th>Location</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
          {listItems}
        </table>
      </div>
    </div>
  );
};

export default EquipmentList;
