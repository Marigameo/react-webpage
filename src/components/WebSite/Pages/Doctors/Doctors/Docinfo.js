import React, { Component } from "react";
import './Docinfo.css'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import bookDocOne from "../../../../assets/img/doctors/book-doc-01.jpg";
import bookDocTwo from "../../../../assets/img/doctors/book-doc-02.jpg";
import bookDocThree from "../../../../assets/img/doctors/book-doc-03.jpg";
import bookDocFour from "../../../../assets/img/doctors/book-doc-04.jpg";
import { Container } from "react-bootstrap";

export default class Docinfo extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 0,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 0
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
        <Container>
<Slider {...settings}>
          <article>
        <div className="profile-widget">
        <a href="#/">
            <img src={bookDocOne} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">Dr. Darren Elder</a></h3>
            <div>
                <h5 id="pro-sub">PSICOLOGIST </h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </div>
    </article>

    <article style={{width: 300}}>
        <div className="profile-widget">
        <a href="#/">
            <img src={bookDocTwo} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">Dr. Darren Elder</a></h3>
            <div>
                <h5 id="pro-sub">PSICOLOGIST </h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </div>
    </article>

    <article style={{width: 300}}>
        <div className="profile-widget">
        <a href="#/">
            <img src={bookDocThree} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">Dr. Darren Elder</a></h3>
            <div>
                <h5 id="pro-sub">PSICOLOGIST </h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </div>
    </article>

    <article style={{width: 300}}>
        <div className="profile-widget">
        <a href="#/">
            <img src={bookDocFour} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">Dr. Darren Elder</a></h3>
            <div>
                <h5 id="pro-sub">PSICOLOGIST </h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </div>
    </article>


          </Slider>
        </Container>
      );
    }
  }
