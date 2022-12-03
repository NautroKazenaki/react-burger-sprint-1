import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalWindowOverlay from './ModalWindowOverlay';
import PropTypes from "prop-types";
import ingredientTypes from '../../utils/PropTypes'

const modalRoot = document.getElementById('react-modals')
  



const ModalWindow = (props) => {
    const closeModalWindow = (e) => {
        if(e.key === 'Escape') {
            props.onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', closeModalWindow)
        return (e) => {
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

export default ModalWindow
