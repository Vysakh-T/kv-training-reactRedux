import './styles/ActionButton.css'
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ActionButton = () => {
    const navigate = useNavigate()
    return ( 
        <div className="wrapper">
            <Button className="btn-round float" label="+" handleClick={() => {navigate('/create')}}/>
            <span>Create Employee</span>
        </div>
     );
}
 
export default ActionButton;
