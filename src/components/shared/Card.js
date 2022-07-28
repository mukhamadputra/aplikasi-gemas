import React from "react";

const Card = (props) => {
    const {title, value} = props
  return(
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default Card;
