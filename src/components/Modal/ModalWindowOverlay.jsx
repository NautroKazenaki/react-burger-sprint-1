import React from 'react'
import MWOStyles from './ModalWindowOverlay.module.css'
import PropTypes from "prop-types";
import ingredientTypes from '../../utils/PropTypes'

const ModalWindowOverlay = (props) => {
    return (
        <div className={MWOStyles.mwOverlay} onClick={props.onClose}>
            
        </div>
    )
}

export default ModalWindowOverlay
