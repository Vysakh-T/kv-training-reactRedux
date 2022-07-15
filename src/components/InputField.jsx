const InputField = ({label, placeholder})  => {
    return (
        <div>
        <div>{label}</div>
        <input type="text" placeholder={placeholder}/>
        </div>
        );
};

export default InputField;