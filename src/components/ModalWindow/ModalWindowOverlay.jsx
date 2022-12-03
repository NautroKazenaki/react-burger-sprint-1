import React from 'react'
import MWOStyles from './ModalWindowOverlay.module.css'

const ModalWindowOverlay = (props) => {
    return (
        <div className={MWOStyles.mwOverlay} onClick={props.onClose}>
            
        </div>
    )
}

export default ModalWindowOverlay
