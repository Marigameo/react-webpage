import './feedback.css'
import { Container } from 'react-bootstrap';

import React, { Component } from "react";
import Slider from "react-slick";

export default class FeedBack extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1734,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1324,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        }
      ]
    };
    return (
      <Container fluid>
        <Slider {...settings}>
          <div>
            <div className="feedback">
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>

          <div>
            <div className="feedback" style={{ width: 400 }}>
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>

          <div>
            <div className="feedback" style={{ width: 400 }}>
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>

          <div>
            <div className="feedback" style={{ width: 400 }}>
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>

          <div>
            <div className="feedback" style={{ width: 400 }}>
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>

          <div>
            <div className="feedback" style={{ width: 400 }}>
            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa numquam vero fugiat placeat error animi ipsam quos perspiciatis itaque? "</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>Lorem, ipsum.</h5>
            </div>
          </div>
          
          </Slider>
      </Container>
    );
  }
}