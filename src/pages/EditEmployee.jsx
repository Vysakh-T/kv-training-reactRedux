import './styles/EditEmployee.css'

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetEmployeeByIDQuery, useLazyGetEmployeesQuery, useUpdateEmployeeByIDMutation } from "../services/employee";

const EditEmployee = () => {

    const{ id } = useParams();
    console.log(id);

    const {data,error,isLoading} = useGetEmployeeByIDQuery(id);
    (data)?console.log(data.data):console.log("Empty");

    // if(data){
    // console.log();
    // }

    const navigate = useNavigate();
    const inputFields = [
        {label: "Employee Name", type: "text", key: "ename"},
        // {label: "Password", type: "text", key: "pword"},
        {label: "Email ID", type: "email", key: "emailid"},
        {label: "Joining Date", type: "text", key: "jdate"},
        {label: "Experience", type: "text", key: "exp"},
        // {label: "Address", type: "text", key: "eadd"},
        // {label: "Upload ID Proof", type: "file", key: "idfile"}
    ] 

    const idMap = {
        ename: "name",
        emailid: "email",
        jdate: "jdate",
        exp: "experience",
        eadd: "address"
    }

    const [UpdateEmployeeByID, result] = useUpdateEmployeeByIDMutation()


    const [formData,setState] = useState({})
    // { ename: data.data.name, emailid: data.data.email, jdate: data.data.jdate, erole: data.data.role, eadd:data.data.address.desc, estatus: data.data.status, exp: data.data.experience }
    
    // console.log(data2);

    const handleChange = (val,key) => {
        setState({ ename: data.data.name, emailid: data.data.email, jdate: data.data.jdate, erole: data.data.role, eadd:data.data.address.desc, estatus: data.data.status, exp: data.data.experience });
        const data2 = {...formData};
        data2[key] = val;
        setState(data2);
        console.log(formData);
      }

    useEffect(() => {
        if(data){
            setState({ ename: data.data.name, emailid: data.data.email, jdate: data.data.jdate, erole: data.data.role, eadd:data.data.address.desc, estatus: data.data.status, exp: data.data.experience });
        }
    },[data])
    

    const submitHandler = (event) => {
        event.preventDefault();
        const post = {
            "id" : data.data.id,
            "name": formData.ename,
            "jdate": formData.jdate,
            "email": formData.emailid,
            "role": formData.erole,
            "status": formData.estatus,
            "experience": formData.exp,
            "password": data.data.password,
            "departmentId": data.data.departmentId,
            "address": {
                "id": data.data.address?data.data.address.id:null,
                "zipcode": data.data.address?data.data.address.zipcode:null,
                "desc": data.data.address?data.data.address.desc:null
            }
        }
        try {
            console.log('hello')
            // console.log(empBody)
            UpdateEmployeeByID({id, post});
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
            {
            (data)?(
            <form name="Ecreate" id="Ecreate" onSubmit={submitHandler} className="form-con">

                {
                    inputFields.map((item) => (

                    <InputField key = {item.key} id={item.key} label={item.label} type={item.type} value ={data.data[idMap[item.key]]} handleChange={handleChange}></InputField>

                    ))
                }

                <div className="form-ele">
                <InputSelect id = 'erole' key = "erole" label="Role" defaultIndex={{HR: 1,ADMIN: 2, DEV: 3, DEVOPS:4}[data.data.role]} disabledIndex={0} handleChange={handleChange} options={
                    [{key: "def", value: "Choose Role"},
                    {key: "hr", value: "HR"},
                    {key: "admin", value: "ADMIN"},
                    {key: "dev", value: "DEV"},
                    {key: "devops", value: "DEVOPS"}]
                    }
                    ></InputSelect>
                </div>

                <div className="form-ele">
                <InputSelect id = 'estatus' key = "estatus" label="Status" defaultIndex={{active: 1,inactive: 2, probation: 3}[data.data.status]} disabledIndex={0} handleChange={handleChange} options={
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

            </form>):(isLoading?(<h3>Loading...</h3>):(<h3>Error</h3>))
            }   
        </section>

        </main>
        </>
     );
}
 
export default EditEmployee;