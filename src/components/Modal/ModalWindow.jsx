import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalWindowOverlay from './ModalWindowOverlay';

import PropTypes from "prop-types";

const modalRoot = document.getElementById('react-modals')
  



const ModalWindow = (props) => {

   
    
    const closeModalWindow = (e) => {
        if(e.key === 'Escape') {
            props.onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeModalWindow)
        return () => {
            document.removeEventListener('keydown', closeModalWindow)
        }
    }, [])

    return ReactDOM.createPortal(
        <>
            <ModalWindowOverlay onClose={props.onClose} />
           <div>
                {props.children}
            </div> 
            
        </>,
        modalRoot
      );
     
}
ModalWindow.PropTypes = {
    props: PropTypes.func
}

export default ModalWindow
