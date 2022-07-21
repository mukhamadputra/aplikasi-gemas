/* eslint-disable react/prop-types */
import React from "react";
import Header from "../components/shared/Header";
import Navigation from "../components/shared/Navigation";

const PageLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Navigation />
      <div className="container">{children}</div>
    </>
  );
};

export default PageLayout;
