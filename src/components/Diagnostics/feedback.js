import '../assets/style.css';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';

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
      slidesToScroll: 3
    };
    return (
      <div className="container">
        <h2> Multiple items </h2>
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
      </div>
    );
  }
}