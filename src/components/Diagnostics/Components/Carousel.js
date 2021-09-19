import React, { Component } from "react";
import CarouselData from './CarouselData';
import Slider from "react-slick";
import { Container } from "react-bootstrap";

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
      <Container fluid>
        <Slider {...settings}>
          <div>
            <CarouselData/>
            </div>
            <div>
            <CarouselData/>  
          </div>
          <div>
            <CarouselData/>  
          </div>
        </Slider>
        </Container>
    );
  }
}