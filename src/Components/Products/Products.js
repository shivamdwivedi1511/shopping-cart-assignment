import React, { useEffect } from "react";
import useApi from "../../Hooks/useApi";
import ProductList from "./ProductList";
import ProductNav from "./ProductNav";
import { useHistory } from "react-router";
import "./Products.scss";
import { filter, isEmpty, sortBy } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/reducers/productReducer";

export default function Products() {
  const categories = filter(
    sortBy(useApi("/categories"), ["order"]),
    function (o) {
      return o.order >= 0;
    }
  );
  const products = useApi("/products");
  const history = useHistory();
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.productReducer);
  let seacrhStr = new URLSearchParams(history.location.search).get("q");

  useEffect(() => {
    if (!isEmpty(products)) dispatch(productActions.saveProduct(products));
  }, [products]);

  return (
    <main className="product-section row">
      <ProductNav
        categories={categories}
        history={history}
        seacrhStr={seacrhStr}
      />
      <ProductList
        seacrhStr={seacrhStr}
        products={AllProducts.products}
        categories={categories}
        dispatch={dispatch}
        history={history}
      />
    </main>
  );
}
