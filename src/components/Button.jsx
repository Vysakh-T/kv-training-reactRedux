import './styles/Button.css'

const Button = (props) => {
    const {label, handleClick, className} = props;

    return (

        <button className={"btn "+className} onClick={handleClick}>
            {label}
        </button>

    );
}

export default Button;