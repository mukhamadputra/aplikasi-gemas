import React, { useState } from "react";
import QrReader from "react-qr-reader-es6";
import { Link, Redirect } from "react-router-dom";

const QRScan = () => {
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setLoadingScan(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="container">
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h4>Scan QR code</h4>
      <QrReader
        facingMode={"environment"}
        delay={500}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "390px" }}
      />
      {loadingScan && <p>Loading</p>}
      {data !== "" && <Redirect to={`/equip-detail/${data}`} />}
    </div>
  );
};

export default QRScan;
