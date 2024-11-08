import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./card";
import { useRef } from "react";
import StrokeL from '../../../Images/Card/Vector (StrokeL).svg';
import StrokeR from '../../../Images/Card/Vector (StrokeR).svg';
import { CardMean } from "./cardhelper";
function FocusOnSelect() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };
  const SliderBtn = React.useRef(null);
  return (
    <div className="slider-container slider-cards">

      <Slider ref={SliderBtn} {...settings}>
      {CardMean.map((cardProject, index) => <Card key={index} {...cardProject}/>)}
      </Slider>
      <div className="cards-pagitaion">
        <button className="btn-prev" onClick={() => SliderBtn?.current?.slickPrev()}> <img src={StrokeL} alt="" /> </button>
        <button className="btn-next" onClick={() => SliderBtn?.current?.slickNext()}> <img src={StrokeR} alt="" /> </button> 
      </div>
    </div>
  );
}

export default FocusOnSelect;
