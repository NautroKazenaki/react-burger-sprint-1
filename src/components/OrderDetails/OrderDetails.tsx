import {
  CheckMarkIcon,
  
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ODStyles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
import {TOrderNumber} from '../../utils/Types'
const OrderDetails = (props:TOrderNumber) => {
  return (
    <>
        <div className={ODStyles.orderNumberContainer}>
          <p className="text text_type_digits-large"> {props.orderNumber}</p>
        </div>
        <div className={ODStyles.idOrderContainer}>
          <p className="text text_type_main-small">Идентификатор заказа появится выше, ожидайте</p>
        </div>
        <div className={ODStyles.iconEffectsContainer}>
          <div className={ODStyles.iconContainer}>
            <CheckMarkIcon type="primary" />
          </div>
        </div>
        <div className={ODStyles.plsWaitText}>
          <p className="text text_type_main-default">
            Ваш заказ начали готовить
          </p>
        </div>
        <div className={ODStyles.plsWaitText2}>
          <p className="text text_type_main-default">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
    </>
  );
};
// OrderDetails.propTypes = {
//   orderNumber: PropTypes.number.isRequired,
// }
export default OrderDetails;
