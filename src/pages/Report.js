import React from "react";
import ReportList from "../components/ReportList";
import PageLayout from "../layouts/PageLayout";
// import Table from "../components/shared/Table";

const Report = () => {
  return (
    <PageLayout>
      <div className="report">
        <ReportList />
        {/* <Table /> */}
      </div>
    </PageLayout>
  );
};

export default Report;
