import "./styles/Input.css"

const InputField = (props)  => {
    return (
        <div key={props.id} className="form-ele">
        <label htmlFor={props.key}>{props.label}</label>
        {/* <input  id={props.key} type={props.type} placeholder={props.label} onChange={(e) => props.onChange(e.target.value)}/> */}
        <input  id={props.id} type={props.type} placeholder={props.label} name={props.key} onChange={(e) => props.handleChange(e.target.value,props.id)}/>
        </div>
        );
};

export default InputField;