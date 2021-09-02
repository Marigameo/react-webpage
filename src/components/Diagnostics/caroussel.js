import '../assets/style.css';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';

import React, { Component } from "react";
import Slider from "react-slick";

import slideOne from '../assets/img/slider.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
          <div>
            <img src={slideOne} alt="slideOne" />
          </div>
        </Slider>
      </div>
    );
  }
}