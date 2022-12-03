import React from 'react'

const U = (props) => {
    return (
        <div>
            <div><p className="text text_type_main-default text_color_inactive">Углеводы, г </p></div>
            <div><p className="text text_type_digits-default text_color_inactive">{props.u}</p></div>
        </div>
    )
}

export default U
