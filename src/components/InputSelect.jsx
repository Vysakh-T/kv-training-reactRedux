const InputSelect = ({label,options}) => {
    return ( 
        <>
        <label>{label}</label><br/>
        <select>
        <option value="" disabled selected>{options[0]}</option>
        {
        options.map(element => (<option value={element}>{element}</option>))
        }
        </select>
        <i className="c-down"></i>
        </>
     );
}
 
export default InputSelect;