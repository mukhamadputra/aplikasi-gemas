import React from "react";
import { Link } from "react-router-dom";

import PageLayout from "../layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <div className="home">
        <h1>Scan QR code/ barcode</h1>
        <Link to="/qrscan">
          <button>scan now</button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Home;
