import "./App.css";
import { useState, useEffect } from "react";
import { EmployeeDataRows } from "./components/EmployeeDataRows/EmployeeDataRows";
import { Pagination } from "./components/Pagination/Pagination";
import axios from "axios";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setEmployeeData(res.data);
        setLoading(false);
      } catch (error) {
        alert("failed to fetch data");
      }
    };

    fetchEmployeeData();
  }, []);

  const totalEmployees = employeeData.length; //length of total employees data objects

  //Logic to get current page employee data:-

  //Math.min is used for last page purpose because when total employees = 46
  //and currentPage*employeesPerPage = 50, we should extract till
  //46 only in slice operation not 50 and there are only 46 employees.
  const indexOfLastEmployee = Math.min(
    currentPage * employeesPerPage,
    totalEmployees
  );
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentPageEmployees = employeeData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  //Change Page
  const paginateNext = () => {
    //ensures the next button works till last page only
    if (currentPage < Math.ceil(totalEmployees / employeesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginatePrev = () => {
    //ensures the previous button works till first page only
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Employee Data Table</h1>
      <EmployeeDataRows employeeData={currentPageEmployees} loading={loading} />
      <Pagination
        currentPage={currentPage}
        paginateNext={paginateNext}
        paginatePrev={paginatePrev}
      />
    </div>
  );
}

export default App;