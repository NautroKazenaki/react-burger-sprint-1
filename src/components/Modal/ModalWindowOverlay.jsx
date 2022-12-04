import React from 'react'
import MWOStyles from './ModalWindowOverlay.module.css'
import PropTypes from "prop-types";


const ModalWindowOverlay = (props) => {
     ModalWindowOverlay.propTypes = {
         props: PropTypes.func.isRequired
     }
    return (
        <div className={MWOStyles.mwOverlay} onClick={props.onClose}>
            
        </div>
    )
}

export default ModalWindowOverlay
