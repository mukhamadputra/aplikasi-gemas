import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ReportAddForm = () => {
  const equip_id = useParams().id;
  const [files, setFiles] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    // store the states in the form data
    // const formData = new FormData(e.target);
    const formData = new FormData();
    formData.append("equip_id", equip_id);
    formData.append("category", e.target.category.value);
    formData.append("time", e.target.time.value);
    formData.append("team", e.target.team.value);
    formData.append("activity", e.target.activity.value);
    formData.append("file", files);
    // const data = {};
    // formData.forEach((value, key) => (data[key] = value));
    // console.log(data);

    //post to database
    const options = {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
      body: formData
    };
    async function fetchData() {
      const response = await fetch("http://192.168.43.230:3001/api/report", options);
      if (response.ok) {
        alert("Success!");
        e.target.reset();
        setFiles();
      }
    }
    fetchData();
  };

  return (
    <div className="add-form">
      <form enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label>Equipment Id:</label>
        <input on type="text" name="equip_id" value={equip_id} disabled />

        <label>Category:</label>
        <select name="category" required>
          <option value=""></option>
          <option value="preventive maintenance">Preventive maintenance</option>
          <option value="corrective maintenance">Corrective maintenance</option>
        </select>

        <label>Time:</label>
        <input type="date" name="time" required />

        <label>Team:</label>
        <input type="text" name="team" required />

        <label>Activity:</label>
        <textarea name="activity" required />

        <label>File (jpg, jpeg, png):</label>
        <input
          type="file"
          name="file"
          accept=".jpg, .jpeg, .png"
          // onChange={(e) => setFiles(URL.createObjectURL(e.target.files[0]))}
          onChange={(e) => setFiles(e.target.files[0])}
          required
        />
        {/* <img src={files} width="100px" /> */}

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
