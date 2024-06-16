import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss";

const Carousel = ({ settings, carouselData }) => {
  return (
    <Slider {...settings}>
      {carouselData?.map((data) => {
        return (
          <div className={styles.carouselWrap}>
            <div className={styles.headerWrap}>
              <h1>{data?.header}</h1>
              <h1>{data?.subHeader}</h1>
            </div>
            <img src={data?.images} />
          </div>
        );
      })}
    </Slider>
  );
};
export default Carousel;
