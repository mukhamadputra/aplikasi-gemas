import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";

const DigitalSignage = () => {
  const DigitalSignageList = () => {
    const [equipments, setEquipments] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch("http://192.168.43.230:3001/api/equipments");
        const data = await response.json();
        setEquipments({ data });
      }
      fetchData();
    }, []);

    let number = 1;
    const listItems =
      equipments &&
      equipments.data
        .filter((equip) => equip.category === "digitalsignage")
        .map((equip) => {
          return (
            <tr key={equip.id}>
              <td>{number++}</td>
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
        <Link to="/equip">
          <button>Back</button>
        </Link>
        <h4>Digital Banner</h4>
        <div style={{ overflow: "scroll", maxHeight: "400px" }}>
          <table>
            <tr>
              <th>No</th>
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

  return (
    <PageLayout>
      <div>
        {/* <h4 style={{ marginTop: "12px" }}>Digital Banner</h4> */}
        <DigitalSignageList />
      </div>
    </PageLayout>
  );
};

export default DigitalSignage;
