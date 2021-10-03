import { Container } from 'react-bootstrap';
import React, { Component } from "react";
import Slider from "react-slick";
import './PosterCard.css'
import One from "../../../../assets/img/blog/blog-01.jpg"
import Two from "../../../../assets/img/blog/blog-02.jpg"
import Three from "../../../../assets/img/blog/blog-03.jpg"

export default class PosterCard extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
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
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 1
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
          <Slider {...settings}>
          <div style={{marginTop: "2rem"}} className="row blog-grid-row">
            <div className="">
                <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src={One} alt="Poster"/></a>
                </div>
            </div>
        </div>
        
        <div style={{marginTop: "2rem"}} className="row blog-grid-row">
            <div className="">
                <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src={Two} alt="Poster"/></a>
                </div>
            </div>
        </div>

        <div style={{marginTop: "2rem"}} className="row blog-grid-row">
            <div className="">
                <div className="blog-image">
                    <a href="blog-details.html"><img className="img-fluid" src={Three} alt="Poster"/></a>
                </div>
            </div>
        </div>
          </Slider>
        </Container>
      );
    }
  }