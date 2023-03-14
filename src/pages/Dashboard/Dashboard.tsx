import React from "react";
import Table from "../../features/Table/Table";
import "../../features/Table/Table.css";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
        <div className="payrollContainer">
            <h1>Employee Payroll Management System</h1>
        </div>
      <Table />
    </div>
  );
};

export default Dashboard;
