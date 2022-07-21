import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ReportAddForm = () => {
  const [state, setState] = useState({
    category: "",
    time: "",
    team: "",
  });

  const handleCategoryChange = (e) => {
    setState({ ...state, category: e.target.value });
  };
  const handleTimeChange = (e) => {
    setState({ ...state, time: e.target.value });
  };
  const handleTeamChange = (e) => {
    setState({ ...state, team: e.target.value });
  };

  const handleSubmit = (e) => {
    let existing = localStorage.getItem("reports");
    existing = existing ? JSON.parse(existing) : [];
    const reportId = uuidv4();
    existing.push({ ...state, equipment_id: reportId });
    localStorage.setItem("reports", JSON.stringify(existing));
    console.log(state);
    e.preventDefault();
  };

  const { category, time, team } = state;

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value=""></option>
          <option value="preventive maintenance">Preventive maintenance</option>
          <option value="corrective maintenance">Corrective maintenance</option>
        </select>

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
        />

        <label>Team:</label>
        <input
          type="text"
          name="team"
          value={team}
          onChange={handleTeamChange}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const ReportAdd = () => {
  return (
    <div className="container">
      <Link to="/report">
        <button>Back</button>
      </Link>
      <h4 style={{ marginTop: "12px" }}>Add New Report</h4>
      <ReportAddForm />
    </div>
  );
};

export default ReportAdd;
