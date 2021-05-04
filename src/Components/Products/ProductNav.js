import React from "react";
import { ROUTE_PATH } from "../../Utils/routesPaths";

export default function ProductNav({ categories, history, seacrhStr }) {
  const list = () =>
    categories.map((i) => (
      <button
        className={`nav-item ${seacrhStr === i.id && "active"}`}
        key={i.id}
        onClick={() =>
          history.push({
            pathname: ROUTE_PATH.PRODUCTS,
            search: `?q=${i.id}`,
          })
        }
      >
        {i.name}
      </button>
    ));
  return (
    <aside className="side-nav">
      {" "}
      <h2 class="sr-only">product filter</h2> {list()}{" "}
    </aside>
  );
}
