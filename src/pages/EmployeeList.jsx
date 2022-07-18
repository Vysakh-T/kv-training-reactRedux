import "./styles/EmployeeList.css";

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function EmployeeList() {
  const data = [
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    { ename: "John Does", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    { ename: "John Does", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    { ename: "John Does", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
  ];

  const [empDetails,setDetails] = useState(data);

  useEffect(()=>{
    setDetails(data);
  },[data]);

  return (
    <>
      <SideNav />
      <Divider />
      <main>
        <section className="title card">
          <h1>Employee List</h1>
          <div className="filter">
            <p>Filter By</p>
            <span>Status</span>
          </div>
          <Button className="btn-action" label="Create Employee" handleClick={() => {}}/>
        </section>

        <section>
            <table>
                <tr className="listheader">
                    <th>Employee Name</th>
                    <th>Employee ID</th>
                    <th>Joining Date</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Experience</th>
                    <th>Action</th>
                </tr>
                    {
                        empDetails.map(item => (
                            <tr>
                            <td>{item.ename}</td>
                            <td>{item.eid}</td>
                            <td>{item.jdate}</td>
                            <td>{item.erole}</td>
                            <td>{item.status}</td>
                            <td>{item.exp}</td>
                            <td>Actions</td>
                            </tr>
                        ))
                    }
            </table>
        </section>
      </main>
    </>
  );
}

export default EmployeeList;
