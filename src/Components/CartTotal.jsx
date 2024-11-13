import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title";

function CardTotal() {
  const { currency, delivery_fee, getCardAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>
              {currency} {getCardAmount()}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between ">
            <p>Shipping Fee</p>
            <p>
              {currency} {delivery_fee}.00
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>
              {currency}{" "}
              {getCardAmount() === 0 ? 0 : getCardAmount() + delivery_fee}.00
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTotal;