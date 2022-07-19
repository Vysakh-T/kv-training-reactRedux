import './styles/ActionButton.css'
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ActionButton = (props) => {
    const navigate = useNavigate()
    return ( 
        <div className="wrapper">
            <Button className="btn-round float" label={props.label} handleClick={() => {navigate(props.target)}}/>
            <span>{props.text}</span>
        </div>
     );
}
 
export default ActionButton;
