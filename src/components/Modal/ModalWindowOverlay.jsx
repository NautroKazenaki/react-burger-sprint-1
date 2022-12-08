import React from 'react'
import MWOStyles from './ModalWindowOverlay.module.css'
import PropTypes from "prop-types";


const ModalWindowOverlay = (props) => {
    
    return (
        <div className={MWOStyles.mwOverlay} onClick={props.onClose}>
            
        </div>
    )
}
ModalWindowOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default ModalWindowOverlay
