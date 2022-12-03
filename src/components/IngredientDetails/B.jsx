import React from 'react'
import PropTypes from "prop-types";
import ingredientTypes from '../../utils/PropTypes'

const B = (props) => {
    return (
        <div>
            <div><p className="text text_type_main-default text_color_inactive">Белки, г </p></div>
            <div><p className="text text_type_digits-default text_color_inactive">{props.b}</p></div>
        </div>
    )
}

export default B
