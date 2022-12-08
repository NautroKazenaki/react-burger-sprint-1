import {
  CheckMarkIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ODStyles from "./OrderDetails.module.css";
import PropTypes from "prop-types";

const OrderDetails = (props) => {
  return (
    <>
        <div className={ODStyles.orderNumberContainer}>
          <p className="text text_type_digits-large"> 034536</p>
        </div>
        <div className={ODStyles.idOrderContainer}>
          <p className="text text_type_main-small">Идентификатор заказа</p>
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
OrderDetails.propTypes = {
  props: PropTypes.func
}
export default OrderDetails;
