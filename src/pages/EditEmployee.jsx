import './styles/EditEmployee.css'

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetEmployeeByIDQuery, useUpdateEmployeeByIDMutation } from "../services/employee";

const EditEmployee = () => {

    const{ id } = useParams();
    console.log(id);

    const {data} = useGetEmployeeByIDQuery(id);
    if(data){
    console.log(data.data);
    }

    if(data){
    console.log({active: 1,inactive: 2, probation: 3}[data.data.status.toLower()]);
    }

    const navigate = useNavigate();
    const inputFields = [
        {label: "Employee Name", type: "text", key: "ename", value: data.data.name},
        // {label: "Password", type: "text", key: "pword"},
        {label: "Email ID", type: "email", key: "emailid", value: data.data.email},
        {label: "Joining Date", type: "text", key: "jdate", value: data.data.jdate},
        {label: "Experience", type: "text", key: "exp", value: data.data.experience},
        {label: "Address", type: "text", key: "eadd", value: data.data.address.desc},
        // {label: "Upload ID Proof", type: "file", key: "idfile"}
    ] 

    const [UpdateEmployeeByID, result] = useUpdateEmployeeByIDMutation()


    const [formData,setState] = useState({ ename: data.data.name, emailid: data.data.email, jdate: data.data.jdate, erole: data.data.role, eadd:data.data.address.desc, estatus: data.data.status, exp: data.data.experience })
    const data2 = {...formData};
    console.log(data2);

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
            "password": data.data.password,
            "departmentId": data.data.departmentId,
            "address": {
                "id": data.data.address.id,
                "zipcode": data.data.address.zipcode,
                "desc": formData.eadd
            }
        }
        try {
            const obj1 = UpdateEmployeeByID(id, empBody);
            console.log(obj1)
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
            <h1>Edit Employee</h1>
        </section>

        <section className="card">

            <form name="Ecreate" id="Ecreate" onSubmit={submitHandler} className="form-con">

                {
                    inputFields.map((item) => (

                    <InputField key = {item.key} id={item.key} label={item.label} type={item.type} handleChange={handleChange} value={item.value}></InputField>

                    ))
                }

                <div className="form-ele">
                <InputSelect id = 'erole' key = "erole" label="Role" defaultIndex={0} handleChange={handleChange} options={
                    [{key: "def", value: "Choose Role"},
                    {key: "hr", value: "HR"},
                    {key: "admin", value: "ADMIN"},
                    {key: "dev", value: "DEV"},
                    {key: "devops", value: "DEVOPS"}]
                    }
                    ></InputSelect>
                </div>

                <div className="form-ele">
                <InputSelect id = 'estatus' key = "estatus" label="Status" defaultIndex={{active: 1,inactive: 2, probation: 3}[data.data.status.toLower()]} handleChange={handleChange} options={
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
 
export default EditEmployee;