import React from "react";
import { productActions } from "../../store/reducers/productReducer";
import { ROUTE_PATH } from "../../Utils/routesPaths";

export default function ProductList({
  products,
  categories,
  seacrhStr,
  dispatch,
  history
}) {
  const list = () =>
    products.map((product) => (
      <div
        className={`product-list__item ${
          seacrhStr && seacrhStr !== product.category && "hidden"
        }`}
        key={product.id}
      >
        <h1 className="product-list__item--title">{product.name}</h1>
        <div className="product-list__item-description">
          <img
            className="product-list__item--image"
            src={product.imageURL}
            alt={`image of ${product.name}`}
          />
          <div className="product-list__item--info">{product.description}</div>
          <button
            type="button"
            disabled={product.stock - product.count === 0}
            className="btn m-btn-buy"
            onClick={() => dispatch(productActions.addToCart(product.id))}
          >
            {`Buy Now @ Rs.${product.price}`}
          </button>
        </div>
        <div className="product-list__item--action">
          <span className="product-list__item--action-mrp">
            {`MRP Rs.${product.price}`}
          </span>
          <button
            type="button"
            disabled={product.stock - product.count === 0}
            className="btn product-list__item--action-buy"
            onClick={() => dispatch(productActions.addToCart(product.id))}
          >
            Buy Now
          </button>
        </div>
      </div>
    ));
  return (
    <>
      <select
        className="m-select-nav"
        value={seacrhStr}
        onChange={(e) =>
          history.push({
            pathname: ROUTE_PATH.PRODUCTS,
            search: `?q=${e.target.value}`,
          })
        }
      >
        <option value="">All Products</option>
        {categories.map((i) => (
          <option value={i.id} key={i.id}>
            {i.name}
          </option>
        ))}
      </select>
      <div className="product-list">{list()}</div>
    </>
  );
}
