import React, { useEffect, ReactNode, SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
import MWStyles from './ModalWindow.module.css'
import ODStyles from '../OrderDetails/OrderDetails.module.css'
import ModalWindowOverlay from './ModalWindowOverlay';

import PropTypes from "prop-types";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals') as HTMLElement
  
type TModalWindowProps = {
    onClose: () => void,
    children: ReactNode,
    title?: string,
}


const ModalWindow = (props:TModalWindowProps) => {

   
    
    const closeModalWindow = (e: KeyboardEvent) => {
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
            <div className={ODStyles.mainContainer}>
                <div className={ODStyles.orderDetailsContainer}>
                    <div className={ODStyles.orderDetailsHeaderAndXButtonContainer}>
                        <div className={ODStyles.orderDetailsHeaderContainer}>
                            <p className="text text_type_main-medium">{props.title}</p>
                        </div>
                        <div onClick={props.onClose} className={ODStyles.orderDetailsCloseIcon}>
                            <CloseIcon type="primary" onClick={props.onClose}/>
                        </div>
                    </div>
                    <div>
                        {props.children}
                    </div> 
                </div>
            </div>
            
           
            
        </>,
        modalRoot
      );
     
}
// ModalWindow.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.element.isRequired,
//     title: PropTypes.string.isRequired
// }

export default ModalWindow
