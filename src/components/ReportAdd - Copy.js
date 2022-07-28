import React, { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

const ReportAddForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, setState] = useState({
    equip_id: useParams().id,
    category: "",
    time: "",
    team: "",
    activity: "",
  });

  console.log(state);

  const handleCategoryChange = (e) => {
    setState({ ...state, category: e.target.value });
  };
  const handleTimeChange = (e) => {
    setState({ ...state, time: e.target.value });
  };
  const handleTeamChange = (e) => {
    setState({ ...state, team: e.target.value });
  };
  const handleActivityChange = (e) => {
    setState({ ...state, activity: e.target.value });
  };

  const handleSubmit = (e) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    };
    async function fetchData() {
      const response = await fetch(
        "http://192.168.43.230:3001/api/report",
        options
      );
      if (response.ok) {
        setIsSuccess(true);
        alert("Success!")
        // console.log(isSuccess);
        setState({
          equip_id: "",
          category: "",
          time: "",
          team: "",
          activity: "",
        });
      }
    }
    fetchData();
    e.preventDefault();
  };

  const { category, time, team, activity, file } = state;

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>Equipment Id:</label>
        <input on type="text" name="id" value={useParams().id} disabled />
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value=""></option>
          <option value="preventive maintenance">Preventive maintenance</option>
          <option value="corrective maintenance">Corrective maintenance</option>
        </select>

        <label>Time:</label>
        <input
          type="date"
          name="time"
          value={time}
          onChange={handleTimeChange}
          required
        />

        <label>Team:</label>
        <input
          type="text"
          name="team"
          value={team}
          onChange={handleTeamChange}
          required
        />

        <label>Activity:</label>
        <textarea
          name="activity"
          value={activity}
          onChange={handleActivityChange}
          required
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
