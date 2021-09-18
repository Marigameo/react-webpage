import React, { Component } from "react";
import Maternity from './Maternity';
import Fertility from './Fertility';
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
      <Container fluid style={{marginBottom: '4rem'}}>
        <Slider {...settings}>
          <div>
            <Maternity/>
            </div>
            <div>
            <Fertility/>  
          </div>
        </Slider>
        </Container>
    );
  }
}