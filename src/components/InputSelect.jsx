const InputSelect = ({id, label,options, defaultIndex, handleChange}) => {
    return ( 
        <>
        <label htmlFor={id}>{label}</label><br/>
        <select id={id} onChange={(e) => handleChange(e.target.value,id)}>
        {
        options.map((element, index) => (<option key={element.key} selected={index === defaultIndex} disabled={index === defaultIndex}>{element.value}</option>))
        }
        )
        </select>
        <i className="c-down"></i>
        </>
     );
}
 
export default InputSelect;