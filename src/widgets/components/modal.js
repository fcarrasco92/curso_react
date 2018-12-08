import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className="Modal">
            esto es un modal
            <button onClick={props.handleClick}>cerrar</button>
            {props.children}            
        </div>
    )
}

export default Modal;