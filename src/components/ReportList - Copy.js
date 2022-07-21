import React, { useEffect, useState } from "react";

const ReportList = () => {
  const existing = localStorage.getItem("reports");
  const reports = existing ? JSON.parse(existing) : [];
  const listItems = reports.map((report) => {
    return (
      <tr key={report.id}>
        <td>{report.id}</td>
        <td>{report.category}</td>
        <td>{report.time}</td>
        <td>{report.team}</td>
      </tr>
    );
  });
  return (
    <div className="report-list">
      <h4>Report List</h4>
      <table>
        <tr>
          <th>Equipment Id</th>
          <th>Category</th>
          <th>Time</th>
          <th>Team</th>
        </tr>
        {listItems}
      </table>
    </div>
  );
};

export default ReportList;