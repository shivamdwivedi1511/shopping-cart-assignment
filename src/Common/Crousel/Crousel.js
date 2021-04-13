import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

export default function Crousel({ data }) {
  const itemList = () =>
    data.map((i) => (
      <Item image={{ url: i.bannerImageUrl }} key={i.id}>
        <img src={i.bannerImageUrl} alt={i.bannerImageAlt} id="banner-image" />
      </Item>
    ));
  return (
    <div>
      <Carousel itemsToShow={1} showArrows={true} enableAutoPlay={true}>
        {itemList()}
      </Carousel>
    </div>
  );
}
