import "./styles/EmployeeList.css";

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateEmployeeMutation, useGetEmployeesQuery } from "../services/employee";
import ActionButton from "../components/ActionButton";

function EmployeeList() {

    const navigate = useNavigate();

    // const data = [
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    //     { ename: "John Doe", eid: "1234", jdate: "12/12/2012", erole: "DEV", status: "Active", exp: "3 Years" },
    // ];

    const obj = useGetEmployeesQuery();

    const [empDetails,setDetails] = useState([]);
    const data = obj.data;
    const isLoading = obj.isLoading;
    

    if(data){
    var data1 = data.data.map((item)=>{
        return {
            ename: item.name,
            eid: item.id, 
            jdate: item.jdate, 
            erole: item.role, 
            estatus: item.status.charAt(0).toUpperCase() + item.status.slice(1), 
            exp: item.experience
        }
    })
}

    useEffect(() => {
        data1?setDetails(data1):console.log("Empty");
    }, [obj])
    



    // const obj = useGetEmployeesQuery();
    // console.log(obj);

    // useEffect(()=>{
    //     setDetails(data);
    // },[data]);

    return (
        <>
        <SideNav />
        <Divider />
        <main>
            <section className="title card">
            <h1>Employee List</h1>
            <div className="filter">
                <p>Filter By</p>
                <span>Status <i className="arrow-down"></i></span>
                
            </div>
            <ActionButton/>
            </section>

            <section className="table">
                    <div className="listheader">
                        <h5>Employee Name</h5>
                        <h5>Employee ID</h5>
                        <h5>Joining Date</h5>
                        <h5>Role</h5>
                        <h5>Status</h5>
                        <h5>Experience</h5>
                        <h5>Action</h5>
                    </div>
                        {   data1?
                            empDetails.map((item,index) => (
                                <div key={index} className="card listrow">
                                    <p>{item.ename}</p>
                                    <p>{item.eid}</p>
                                    <p>{item.jdate}</p>
                                    <p>{item.erole}</p>
                                    <span className={item.estatus}>{item.estatus}</span>
                                    <p>{item.exp}</p>
                                    <p>
                                        <i>   &#10006;</i> 
                                        <i>   &#9998;</i>
                                    </p>
                                </div>
                            )):(isLoading?(<h2>Loading...</h2>):(<h2>Error!</h2>))
                        }
                
            </section>
        </main>
        </>
    );
}

export default EmployeeList;
