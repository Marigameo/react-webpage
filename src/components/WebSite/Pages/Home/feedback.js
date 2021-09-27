import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import './feedback.css'
import { Container } from 'react-bootstrap';

import React, { Component } from "react";
import Slider from "react-slick";

export default class FeedBack extends Component {
  render() {
    const settings = {
        className: "slider variable-width",
        variableWidth: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <Container fluid>
        <Slider {...settings}>
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