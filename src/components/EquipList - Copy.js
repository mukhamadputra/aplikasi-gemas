import React from "react";
import { Link } from "react-router-dom";

const EquipmentList = () => {
  const existing = localStorage.getItem("equipments");
  const equipments = existing ? JSON.parse(existing) : [];
  const listItems = equipments.map((equip) => {
    return (
      <tr key={equip.id}>
        <td><Link to={`/equip-detail/${equip.id}`}>{equip.id}</Link></td>
        <td>{equip.category}</td>
        <td>{equip.status}</td>
      </tr>
    );
  });
  return (
    <div className="equip-list">
      <h4>Equipment List</h4>
      <table>
        <tr>
          <th>Equipment Id</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
        {listItems}
      </table>
    </div>
  );
};

export default EquipmentList;
