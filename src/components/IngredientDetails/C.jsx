import React from 'react'
import PropTypes from "prop-types";
import ingredientTypes from '../../utils/PropTypes'

const C = (props) => {
    debugger
    return (
        <div>
            <div><p className="text text_type_main-default text_color_inactive">Калории, ккал </p></div>
            <div><p className="text text_type_digits-default text_color_inactive">{props.c}</p></div>
        </div>
    )
}

export default C
