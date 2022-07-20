import { useState } from "react";
import "./styles/Input.css"

const InputField = (props)  => {

    // const [toggleLabel, setState] = useState(false);
    var toggleLabel = false;

    if(props.toggleLabel!=null){
        toggleLabel = props.toggleLabel;
    }

    console.log(props.id);
    const label = document.getElementsByClassName(props.id)[0];
    console.log(label);

    const toggleLabelFunc1 = () => {
        if(!toggleLabel) return;
        label.style.visibility = "visible";
        return;
    }

    const toggleLabelFunc2 = () => {
        if(!toggleLabel) return;
        label.style.visibility = "hidden";
        return;
    }

    return (
        <div key={props.id} className="form-ele">
        <label className={props.id} htmlFor={props.id}>{props.label}</label>
        {/* <input  id={props.key} type={props.type} placeholder={props.label} onChange={(e) => props.onChange(e.target.value)}/> */}
        <input  id={props.id} type={props.type} placeholder={props.label} name={props.key} defaultValue ={props.value} onChange={(e) => props.handleChange(e.target.value,props.id)} onFocus={toggleLabelFunc1} onBlur={toggleLabelFunc2}/>
        </div>
        );
};

export default InputField;