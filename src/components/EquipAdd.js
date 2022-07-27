import React, { useState } from "react";
import { Link } from "react-router-dom";

const EquipAddForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, setState] = useState({
    category: "",
    loc: "",
    network: "",
    status: "",
    mac_sn: "",
    th: "",
  });

  const handleCategoryChange = (e) => {
    setState({ ...state, category: e.target.value });
  };
  const handleLocChange = (e) => {
    setState({ ...state, loc: e.target.value });
  };
  const handleNetworkChange = (e) => {
    setState({ ...state, network: e.target.value });
  };
  const handleStatusChange = (e) => {
    setState({ ...state, status: e.target.value });
  };
  const handleMacSNChange = (e) => {
    setState({ ...state, mac_sn: e.target.value });
  };
  const handleThChange = (e) => {
    setState({ ...state, th: e.target.value });
  };

  const handleSubmit = (e) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    };
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3001/api/equipment",
        options
      );
      if (response.ok) {
        setIsSuccess(true);
        console.log(isSuccess);
        alert("Success!")
        setState({
          category: "",
          loc: "",
          network: "",
          status: "",
          mac_sn: "",
          th: "",
        });
      }
    }
    fetchData();
    e.preventDefault();
  };

  const { category, loc, network, status, mac_sn, th } = state;

  return (
    <div className="add-form">
      {isSuccess && <h4 style={{ color: "green" }}>Success!</h4>}
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value=""></option>
          <option value="slaveclock">Slave clock</option>
          <option value="digitalbanner">Digital banner</option>
          <option value="digitalsignage">Digital signange</option>
        </select>

        <label>Location:</label>
        <input
          type="text"
          name="loc"
          value={loc}
          onChange={handleLocChange}
          required
        />

        <label>MAC/SN:</label>
        <input
          type="text"
          name="mac_sn"
          value={mac_sn}
          onChange={handleMacSNChange}
          required
        />

        <label>Year:</label>
        <input
          type="text"
          name="th"
          value={th}
          onChange={handleThChange}
          required
        />

        <label>Network:</label>
        <input
          type="text"
          name="network"
          value={network}
          onChange={handleNetworkChange}
          required
        />

        <label>Status: </label>
        <select value={status} onChange={handleStatusChange} required>
          <option value=""></option>
          <option value="normal">Normal</option>
          <option value="damaged">Damaged</option>
          <option value="spare">Spare</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const EquipAdd = () => {
  return (
    <div className="container">
      <Link to="/equip">
        <button>Back</button>
      </Link>
      <h4 style={{ marginTop: "12px" }}>Add New Equipment</h4>
      <EquipAddForm />
    </div>
  );
};

export default EquipAdd;
