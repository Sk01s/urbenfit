import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { CHECKOUT_STEP_2, ORDER_COMPLETED } from "@/constants/routes";
import { useFormikContext } from "formik";
import { displayMoney, displayActionMessage } from "@/helpers/utils";
import PropType from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setPaymentDetails } from "@/redux/actions/checkoutActions";
import firebase from "@/services/firebase";
import { clearBasket } from "@/redux/actions/basketActions";

const Total = ({ isInternational, subtotal, order }) => {
  const { values, submitForm } = useFormikContext();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const searchData = new URLSearchParams();

  const handleOrder = () => {
    if (order.payment !== "COD")
      return displayActionMessage("Feature not ready yet :)", "info");
    crypto.randomUUID();
    // Update the Orders date

    order.date = new Date();

    firebase.addOrder(crypto.randomUUID(), order);
    dispatch(clearBasket());
    history.push(ORDER_COMPLETED, order);
  };
  const onClickBack = () => {
    // destructure to only select left fields omitting cardnumber and ccv
    const { cardnumber, ccv, ...rest } = values;

    dispatch(setPaymentDetails({ ...rest })); // save payment details
    history.push(CHECKOUT_STEP_2);
  };

  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h2 className="basket-total-amount">
          {displayMoney(subtotal + (isInternational ? 50 : 5))}
        </h2>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          onClick={() => onClickBack(values)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp; Go Back
        </button>
        <button
          className="button"
          disabled={false}
          onClick={handleOrder}
          type="button"
        >
          <CheckOutlined />
          &nbsp; Confirm
        </button>
      </div>
    </>
  );
};

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired,
};

export default Total;
