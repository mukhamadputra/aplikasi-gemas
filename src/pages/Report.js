import React from "react";
import ReportCount from "../components/ReportCount";
import ReportList from "../components/ReportList";
import PageLayout from "../layouts/PageLayout";

const Report = () => {
  return (
    <PageLayout>
      <div className="report" style={{width:"350px"}}>
        <div><ReportCount /></div>
        <div style={{marginTop:"24px"}}><ReportList /></div>
      </div>
    </PageLayout>
  );
};

export default Report;
