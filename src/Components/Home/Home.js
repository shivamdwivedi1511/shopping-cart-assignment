import React, { Fragment } from "react";
import { useHistory } from "react-router";
import Crousel from "../../Common";
import useApi from "../../Hooks/useApi";
import { filter, sortBy } from "lodash";
import { ROUTE_PATH } from "../../Utils/routesPaths";
import "./Home.scss";
import Button from "../../Common/Buuton/Button";
export default function Home() {
  const bannerData = useApi("/banners");
  const categories = filter(
    sortBy(useApi("/categories"), ["order"]),
    function (o) {
      return o.order >= 0;
    }
  );
  const history = useHistory();

  const categoryList = () =>
    categories.map((item) => (
      <Fragment key={item.id}>
        <div className="categories_item">
          <div className="category_logo">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="category_link">
            <div className="name"> {item.name} </div>
            <div className="description"> {item.description} </div>
            <Button
              text={`Explore ${item.key}`}
              onClick={() =>
                history.push({
                  pathname: ROUTE_PATH.PRODUCTS,
                  search: `?q=${item.id}`,
                })
              }
            />
          </div>
        </div>
        <hr />
      </Fragment>
    ));
  return (
    <main className="row">
      <Crousel data={bannerData} /> <hr />
      <div className="categories"> {categoryList()} </div>
    </main>
  );
}
