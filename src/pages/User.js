import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";

const User = () => {
  return (
    <PageLayout>
      <h1>User Page</h1>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </PageLayout>
  );
};

export default User;
