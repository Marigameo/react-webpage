import React, { Component } from "react";
import sOne from '../../assets/img/blog-1.jpg'
import Slider from "react-slick";
import './Slide.css'
import { Container } from "react-bootstrap";

export default class Slide extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container>
        <h2> Lorem, ipsum. </h2>
        <Slider {...settings}>
          <div>
           <img src={sOne} width={250} className='s-one' alt="sOne" />
          </div>
          <div>
          <img src={sOne} width={250} className='s-one' alt="sOne" />
          </div>
          <div>
          <img src={sOne} width={250} className='s-one' alt="sOne" />
          </div>
          <div>
          <img src={sOne} width={250} className='s-one' alt="sOne" />
          </div>
        </Slider>
      </Container>
    );
  }
}