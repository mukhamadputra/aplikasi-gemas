import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReportCategory = () => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://192.168.43.230:3001/api/reports");
      const data = await response.json();
      setReports({ data });
      // data.filter((sort) => sort.equip_id === useParams().id)
    }
    fetchData();
  }, []);
  
  let number = 1;
  const listItems =
    reports &&
    reports.data
      .filter((report) => report.equip_id === useParams().id)
      .map((report) => {
        return (
          <tr key={report.id}>
            <td>{number++}</td>
            <td>{report.time}</td>
            <td>{report.category}</td>
            <td>{report.team}</td>
          </tr>
        );
      });
  return (
    <div className="report-list">
      <h4 style={{ margin: "12px 0" }}>History</h4>
      <div style={{ overflow: "scroll", maxHeight: "180px" }}>
        <table>
          <tr>
            <th>No</th>
            <th>Time</th>
            <th>Category</th>
            <th>Team</th>
          </tr>
          {listItems}
        </table>
      </div>
    </div>
  );
};

export default ReportCategory;
