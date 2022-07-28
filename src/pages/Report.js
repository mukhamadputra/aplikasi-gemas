import React from "react";
import ReportList from "../components/ReportList";
import PageLayout from "../layouts/PageLayout";

const Report = () => {
  return (
    <PageLayout>
      <div className="report" style={{width:"350px"}}>
        {/* <div><ReportCount /></div> */}
        <ReportList />
      </div>
    </PageLayout>
  );
};

export default Report;
