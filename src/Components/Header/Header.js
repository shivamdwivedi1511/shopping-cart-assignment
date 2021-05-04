import React from "react";
import logo from "../../../static/images/logo.png";
import cart from "../../../static/images/cart.svg";
import "./Header.scss";
import { ROUTE_PATH } from "../../Utils/routesPaths";
import { Link, useHistory, useLocation } from "react-router-dom";
import Cart from "../Cart";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/reducers/cartReducer";
import { filter } from "lodash";

export default function Header() {
  const cartShow = useSelector((state) => state.CartReducer.show);
  const cartStore = filter(
    useSelector((state) => state.productReducer.products),
    "count"
  );
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <header>
      {cartShow && <Cart items={cartStore} />}
      <nav className="header">
        <div className="header_logo">
          <img
            src={logo}
            alt="logo"
            onClick={() =>
              history.push({
                pathname: ROUTE_PATH.HOME,
              })
            }
          />
        </div>
        <div className="header_links">
          <ul>
            <li className="link_item">
              <Link
                to={ROUTE_PATH.HOME}
                className={
                  location.pathname === ROUTE_PATH.HOME ? "active" : ""
                }
              >
                Home
              </Link>
            </li>
            <li className="link_item">
              <Link
                to={ROUTE_PATH.PRODUCTS}
                className={
                  location.pathname === ROUTE_PATH.PRODUCTS ? "active" : ""
                }
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_cart">
          <div className="cart_links">
            <ul>
              <li className="cart_item link_item">
                <Link
                  to={ROUTE_PATH.SIGN_IN}
                  className={
                    location.pathname === ROUTE_PATH.SIGN_IN ? "active" : ""
                  }
                >
                  SignIn
                </Link>
              </li>
              <li className="cart_item link_item">
                <Link
                  to={ROUTE_PATH.SIGN_UP}
                  className={
                    location.pathname === ROUTE_PATH.SIGN_UP ? "active" : ""
                  }
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="cart_section"
            onClick={() => dispatch(cartActions.toggleCart(!cartShow))}
          >
            <img src={cart} aria-label="cart" alt="cart" id="cart_logo" />
            <span className="cart_detail"> {cartStore.length} items </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
