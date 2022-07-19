import './styles/DisplayEmployee.css'

import SideNav from "../components/SideNav";
import Divider from "../components/Divider";
import InputField from "../components/InputField";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";
import ActionButton from '../components/ActionButton';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetEmployeeByIDQuery, useUpdateEmployeeByIDMutation } from "../services/employee";

const DisplayEmployee = () => {

    const{ id } = useParams();
    console.log(id);

    const {data,isLoading,error} = useGetEmployeeByIDQuery(id);
    (data)?console.log(data.data):console.log("Empty");

    const navigate = useNavigate();
    


    return ( 
        <>
        <SideNav/>
        <Divider/>
        <main>

        {
        (data)?(
        <>   
        <section className="title card">
            <h1>Employee Details</h1>
            <ActionButton label="&#9998;" text="&nbsp;&nbsp;Edit&nbsp;&nbsp;" target={`/edit/${data.data.id}`}/>
        </section>

        <section className="empDetail card">
            <div className='empDetail-ele'>
                <span>Employee Name</span>
                <p>{data.data.name}</p>
            </div>
            <div className='empDetail-ele'>
                <span>Employee ID</span>
                <p>{data.data.id}</p>
            </div>
            <div className='empDetail-ele'>
                <span>Joining Date</span>
                <p>{data.data.jdate}</p>
            </div>
            <div className='empDetail-ele'>
                <span>Role</span>
                <p>{data.data.role}</p>
            </div>
            <div className='empDetail-ele'>
                <span>Status</span>
                <p>{data.data.status}</p>
            </div>
            <div className='rule'>
            </div>
            <div className='empDetail-ele'>
                <span>Experience</span>
                <p>{data.data.experience}</p>
            </div>
            <div className='empDetail-ele'>
                <span>Address</span>
                {(data.data.address)?
                (<p>{data.data.address.desc}, {data.data.address.zipcode} </p>): (<p> </p>)}
            </div>
        </section>

        </>):
        (isLoading?(<h3>Loading...</h3>):(<h3>Error!</h3>)) 
        }

        </main>
        </>
     );
}
 
export default DisplayEmployee;