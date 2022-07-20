import './styles/ModalPopup.css'
import { useEffect, useState } from 'react';
import Button from './Button';

const ModalPopup = (props) => {
    
    
    return ( 
        <div className="modal-popup">
            <div className="overlay"></div>
            <div className="modal">
                <i onClick={() => {props.setToggle(false)}} className="close-button">&times;</i>
                <p className='modal-title'>{props.title}</p>
                <p className='modal-subtitle'>{props.subtitle}</p>
                <div className='modal-buttons'>
                <Button className = "btn-primary" label="Confirm" handleClick = {()=> {props.setToggle(false); props.clickFunc(props.clickedID)}}></Button>
                <Button className = "btn-secondary" label="Cancel" handleClick = {() => {props.setToggle(false)}}></Button>
                </div>
            </div>
      </div>
     );
}
 
export default ModalPopup;