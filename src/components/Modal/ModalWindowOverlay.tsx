import React from 'react'
import MWOStyles from './ModalWindowOverlay.module.css'
import PropTypes from "prop-types";

type TModalWindowOverlayProps = {
    onClose: () => void,
}

const ModalWindowOverlay = (props: TModalWindowOverlayProps) => {

    
    
    return (
        <div className={MWOStyles.mwOverlay} onClick={props.onClose}>
            
        </div>
    )
}
ModalWindowOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default ModalWindowOverlay
