import React, { Component } from "react";
import slider from '../../../../assets/img/slider.png'
import Slider from "react-slick";
import './Carousel.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src={slider} alt="slider" />
            </div>
            <div>
          <img src={slider} alt="slider" />  
          </div>
          <div>
          <img src={slider} alt="slider" />  
          </div>
        </Slider>
        </div>
    );
  }
}