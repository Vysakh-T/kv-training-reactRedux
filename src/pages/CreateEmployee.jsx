import "./styles/CreateEmployee.css"

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCreateEmployeeMutation } from "../services/employee";

function CreateEmployee() {

    const navigate = useNavigate();
    const inputFields = [
        {label: "Employee Name", type: "text", key: "ename"},
        {label: "Password", type: "text", key: "pword"},
        {label: "Email ID", type: "email", key: "emailid"},
        {label: "Joining Date", type: "text", key: "jdate"},
        {label: "Experience", type: "text", key: "exp"},
        {label: "Address", type: "text", key: "eadd"},
        {label: "Upload ID Proof", type: "file", key: "idfile"}
    ] 

    const [CreateEmployee, result] = useCreateEmployeeMutation()

    // const fSubmit = () => {
    //     document.getElementById('Ecreate').submit();
    //     return;
    // }

    const [formData,setState] = useState({ ename: "", pword: "", emailid:"", jdate: "", erole: "", eadd:"", idfile: "", estatus: "", exp: "" })
    const data2 = {...formData};

    const handleChange = (val,key) => {
        data2[key] = val;
        setState(data2);
        console.log(formData);
      }
    

    const submitHandler = (event) => {
        event.preventDefault();
        const empBody = {
            "name": formData.ename,
            "jdate": formData.jdate,
            "email": formData.emailid,
            "role": formData.erole,
            "status": formData.estatus,
            "experience": formData.exp,
            "password": formData.pword,
            "departmentId": "70b58dc8-fd67-4ccc-b9e5-ac5f2673a8df",
            "address": {
                "zipcode": "123123",
                "desc": formData.eadd
            }
        }
        try {
            const obj = CreateEmployee(empBody);
            console.log(obj)
        } catch (error) {
            console.log(error);
        }
        navigate('/list');
    }

    return ( 
        <>
        <SideNav/>
        <Divider/>
        <main>

        <section className="title card">
            <h1>Create Employee</h1>
        </section>

        <section className="card">

            <form name="Ecreate" id="Ecreate" onSubmit={submitHandler} className="form-con">

                {
                    inputFields.map((item) => (

                    <InputField key = {item.key} id={item.key} label={item.label} type={item.type} handleChange={handleChange}></InputField>

                    ))
                }

                <div className="form-ele">
                <InputSelect id = 'erole' key = "erole" label="Role" defaultIndex={0} disabledIndex={0} handleChange={handleChange} options={
                    [{key: "def", value: "Choose Role"},
                    {key: "hr", value: "HR"},
                    {key: "admin", value: "ADMIN"},
                    {key: "dev", value: "DEV"},
                    {key: "devops", value: "DEVOPS"}]
                    }
                    ></InputSelect>
                </div>

                <div className="form-ele">
                <InputSelect id = 'estatus' key = "estatus" label="Status" defaultIndex={0} disabledIndex={0} handleChange={handleChange} options={
                    [{key: "def", value: "Status"},
                    {key: "active", value: "Active"},
                    {key: "inactive", value: "Inactive"},
                    {key: "probation", value: "Probation"}]
                    }
                    ></InputSelect>
                </div>

                <div className="form-btns">
                <Button className = "btn-primary" label="Submit" type = "submit" handleClick = {()=> {}}></Button>
                <Button className = "btn-secondary" label="Cancel" handleClick = {() => {navigate('/list')}}></Button>
                </div>

            </form>
        </section>

        </main>
        </>
     );
}

export default CreateEmployee;