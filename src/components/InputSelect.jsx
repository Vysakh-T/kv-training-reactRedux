const InputSelect = ({label,options, defaultIndex}) => {
    return ( 
        <>
        <label>{label}</label><br/>
        <select>
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