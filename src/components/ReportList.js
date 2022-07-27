import React, { useEffect, useState } from "react";

const ReportList = () => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/api/joins");
      const data = await response.json();
      setReports({ data });
    }
    fetchData();
  }, []);

  let number = 1;
  const listItems =
    reports &&
    reports.data.map((report) => {
      return (
        <tr key={report.id}>
          <td>{number++}</td>
          <td>{report.equip_cat}</td>
          <td>{report.loc}</td>
          <td>{report.rep_cat}</td>
          <td>{report.time}</td>
          <td>{report.team}</td>
          <td>{report.activity}</td>
          <td>{report.file}</td>
        </tr>
      );
    });
  return (
    <div className="report-list">
      <h4>Report List</h4>
      <div style={{ overflow: "scroll", maxHeight: "250px" }}>
        <table>
          <tr>
            <th>No</th>
            <th>Equipment</th>
            <th>Location</th>
            <th>Category</th>
            <th>Time</th>
            <th>Team</th>
            <th>Activity</th>
            <th>File</th>
          </tr>
          {listItems}
        </table>
      </div>
    </div>
  );
};

export default ReportList;
