import React from "react";
import { useStateValue } from "./StateProvider";
import "./Styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <div className="checkout__LeftSide">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpeg"
            alt=""
          />

          {basket?.length === 0 ? (
            <div>
              <h2>Your shopping basket is empty</h2>
              <p>
                You have no items in your basket. To buy more items, click "Add
                to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping basket</h2>
              {/* List all of the checkout items */}
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
              ;
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout__Rightside">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
