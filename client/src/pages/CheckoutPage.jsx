import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };

  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Moob4CICY9j85jEXMieE8tUNnFal0mqsSM4FLHwCYgT0IprMleR5L0TdtPngHRn54bGfBvDiSSnJaj8Lsb65RSW00gYf5S4EV"
        currency="TRY"
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
