import InputField from "../components/InputField";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CompanyLogo from '../img/kv logo.png';
import LoginIllustration from '../img/login img.png';
import './styles/Login.css'

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

        <main className="login">
        <section className="left">
            <img src={LoginIllustration} alt="Illustration"/>
        </section>
        <section className="right">
        <div className="container">
        <img src={CompanyLogo} alt="KeyValue Logo"/>
        <InputField label="Username" type="text" key="uname" onChange={() => {}}></InputField>
        <InputField label="Password" type="text" key="pword" onChange={() => {}}></InputField>
        <Button className = "btn-primary" label="Log In" handleClick = {()=> {}}></Button>
        </div>
        </section>
        {/* <Button label = 'Login' className="btn-primary" handleClick = {() => navigate('/create')}></Button> */}
        </main>
     );
}

export default Login;