import "./styles/CreateEmployee.css"

import InputField from "../components/InputField";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";

function CreateEmployee() {
    const inputFields = [
        {label: "Employee Name", type: "text", key: "ename"},
        {label: "Employee ID", type: "text", key: "eid"},
        {label: "Email ID", type: "email", key: "emailid"},
        {label: "Joining Date", type: "text", key: "jdate"},
        {label: "Experience", type: "text", key: "exp"},
        {label: "Address", type: "text", key: "eadd"},
        {label: "Upload ID Proof", type: "file", key: "idfile"}
    ] 

    return ( 
        <main>
        <section className="title card">
            <h1>Create Employee</h1>
        </section>

        <section className="card">

            <form name="Ecreate" id="Ecreate" onsubmit="return false" className="form-con">

                {
                    inputFields.map(item => (<InputField key={item.key} label={item.label} type={item.type}></InputField>))
                }

                <InputSelect label="Role" defaultIndex={0} options={
                    [{key: "def", value: "Choose Role"},
                    {key: "hr", value: "HR"},
                    {key: "admin", value: "ADMIN"},
                    {key: "dev", value: "DEV"},
                    {key: "devops", value: "DEVOPS"}]
                    }
                    ></InputSelect>

                <InputSelect label="Status" defaultIndex={0} options={
                    [{key: "def", value: "Status"},
                    {key: "active", value: "Active"},
                    {key: "inactive", value: "Inactive"}]
                    }
                    ></InputSelect>

                <Button className = "btn-primary" label="Submit" handleClick = {() => {}}></Button>
                <Button className = "btn-secondary" label="Cancel" handleClick = {() => {}}></Button>

            </form>
        </section>

        </main>
     );
}

export default CreateEmployee;