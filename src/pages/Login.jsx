import InputField from "../components/InputField";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    // const [state, setState] = useState({username: "", password: ""});

    // const onSubmit = (username,password) => {
    //     setState({
    //         username,
    //         password
    //     })
    // }

    // useEffect(()=>{
    //     console.log(state);
    // },[state])


    return ( 
        <>
        <InputField label="Username" type="text" key="uname" onChange={() => {}}></InputField>
        <InputField label="Password" type="text" key="pword" onChange={() => {}}></InputField>
        {/* <Button label = 'Login' className="btn-primary" handleClick = {() => navigate('/create')}></Button> */}
        </>
     );
}

export default Login;