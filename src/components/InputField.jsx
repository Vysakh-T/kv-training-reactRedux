import "./styles/Input.css"

const InputField = (props)  => {
    return (
        <div className="inputField">
        <div>{props.label}</div>
        {/* <input  id={props.key} type={props.type} placeholder={props.label} onChange={(e) => props.onChange(e.target.value)}/> */}
        <input  id={props.key} type={props.type} placeholder={props.label}/>
        </div>
        );
};

export default InputField;