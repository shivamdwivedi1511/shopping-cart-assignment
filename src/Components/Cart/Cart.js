import React from "react";
import "./Cart.scss";
import rightArrow from "../../../static/images/right-arrow.svg";
import close from "../../../static/images/close.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/reducers/cartReducer";
import { isEmpty, reduce } from "lodash";
import { productActions } from "../../store/reducers/productReducer";

export default function Cart({ items }) {
  const dispatch = useDispatch();
  const calculateTotal = () =>
    reduce(
      items,
      function (sum, n) {
        return sum + n.count * n.price;
      },
      0
    );
  const list = () => {
    return items.map((i) => (
      <div className="item" key={i.id}>
        <img src={i.imageURL} alt="logo" className="logo" />
        <div className="item__info">
          <h1>{i.name}</h1>
          <div className="count">
            <div className="count_button">
              <button
                className="btn"
                onClick={() => dispatch(productActions.addToCart(i.id))}
              >
                +
              </button>{" "}
              <span>{i.count}</span>
              <button
                className="btn"
                onClick={() => dispatch(productActions.removeCart(i.id))}
              >
                -
              </button>{" "}
              X Rs. {i.price}
            </div>
            <div className="count_price">Rs. {i.price * i.count}</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="my-cart">
      <div className="my-cart__container">
        <div className="my-cart__container_header">
          <span>My Cart</span>
          <img
            src={close}
            alt="close"
            onClick={() => dispatch(cartActions.hidecart())}
          />
        </div>
        <div className="my-cart__container_content">
          {isEmpty(items) ? (
            <div className="empty_cart">
              <h1>No items in your cart</h1>
              <p>Your favourite items are just a click away</p>
            </div>
          ) : (
            list()
          )}
        </div>
        <div className="my-cart__container_buy row">
          {isEmpty(items) ? (
            <button
              className="btn no-content"
              onClick={() => dispatch(cartActions.hidecart())}
            >
              Start Shopping
            </button>
          ) : (
            <>
              <p className="promo">Promo code can be applied on payment page</p>
              <div
                className="button checkout"
                onClick={() => dispatch(cartActions.hidecart())}
              >
                <p>Proceed to checkout</p>
                <div className="price">
                  <p>Rs. {calculateTotal()}</p>
                  <img src={rightArrow} alt="arror" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
