import React from 'react'
import PropTypes from "prop-types";
import ingredientTypes from '../../utils/PropTypes'

const ZH = (props) => {
    return (
        <div>
            <div><p className="text text_type_main-default text_color_inactive">Жиры, г </p></div>
            <div><p className="text text_type_digits-default text_color_inactive">{props.zh}</p></div>
        </div>
    )
}

export default ZH
