import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const EquipAddForm = () => {
  const [state, setState] = useState({
    category: "",
    loc: "",
    network: "",
    status: "",
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

  const handleSubmit = (e) => {
    let existing = localStorage.getItem("equipments");
    existing = existing ? JSON.parse(existing) : [];
    const equipId = uuidv4();
    existing.push({ ...state, id: equipId });
    localStorage.setItem("equipments", JSON.stringify(existing));
    console.log(state);
    e.preventDefault();
  };

  const { category, loc, network, status } = state;

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value=""></option>
          <option value="slaveclock">Slave clock</option>
          <option value="signaget">Signange t</option>
          <option value="digitalbanner">Digital banner</option>
        </select>

        <label>Location:</label>
        <input type="text" name="loc" value={loc} onChange={handleLocChange} required/>

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
      <h4 style={{marginTop: '12px'}}>Add New Equipment</h4>
      <EquipAddForm />
    </div>
  );
};

export default EquipAdd;
