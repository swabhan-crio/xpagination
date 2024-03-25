import React from "react";
import styles from "./EmployeeDataRows.module.css";

export const EmployeeDataRows = ({ employeeData, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <table className={styles.employeeTable}>
        <thead>
          <tr className={styles.tableHeading}>
            <td style={{ width: "70px", height: "43px", marginLeft: "10px" }}>
              ID
            </td>
            <td style={{ width: "370px", marginLeft: "30px" }}>Name</td>
            <td style={{ width: "430px", marginRight: "60px" }}>Email</td>
            <td style={{ width: "300px" }}>Role</td>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employees) => (
            <tr key={employees.id} className={styles.tableData}>
              <td style={{ width: "70px", height: "43px", marginLeft: "10px" }}>
                {employees.id}
              </td>
              <td style={{ width: "370px", marginLeft: "30px" }}>
                {employees.name}
              </td>
              <td style={{ width: "430px", marginRight: "60px" }}>
                {employees.email}
              </td>
              <td style={{ width: "300px" }}>{employees.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};