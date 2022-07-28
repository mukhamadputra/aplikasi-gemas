import React, { useState, useEffect } from "react";
import PageLayout from "../layouts/PageLayout";
import ReportCount from "../components/ReportCount";
import Card from "../components/shared/Card";

const Dashboard = () => {
  const [equipments, setEquipments] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://192.168.43.230:3001/api/equipments");
      const data = await response.json();
      setEquipments({ data });
    }
    fetchData();
  }, []);

  let allEquip = 0;
  const listItemsAll =
    equipments &&
    equipments.data.map(() => {
      {
        allEquip++;
      }
    });

  let equipNormal = 0;
  const listItemsNormal =
    equipments &&
    equipments.data
      .filter((equip) => equip.status === "normal")
      .map(() => {
        {
          equipNormal++;
        }
      });

  let equipDamage = 0;
  const listItemsDamage =
    equipments &&
    equipments.data
      .filter((equip) => equip.status === "damage")
      .map(() => {
        {
          equipDamage++;
        }
      });

  let equipSpare = 0;
  const listItemsSpare =
    equipments &&
    equipments.data
      .filter((equip) => equip.status === "spare")
      .map(() => {
        {
          equipSpare++;
        }
      });

  return (
    <PageLayout>
      <h1>Overview</h1>
      <div className="card-box">
        <Card title="Total Equipment" value={allEquip} />
        <Card title="Normal Equipment" value={equipNormal} />
        <Card title="Damage Equipment" value={equipDamage} />
        <Card title="Spare Equipment" value={equipSpare} />
      </div>
      <ReportCount />
    </PageLayout>
  );
};

export default Dashboard;
