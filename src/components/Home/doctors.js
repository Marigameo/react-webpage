import React, { Component } from "react";
import Slider from "react-slick";
import '../assets/style.css'
import 'swiper/swiper-bundle';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import bookDocOne from "../assets/img/doctors/book-doc-01.jpg";
import bookDocTwo from "../assets/img/doctors/book-doc-02.jpg";
import bookDocThree from "../assets/img/doctors/book-doc-03.jpg";
import bookDocFour from "../assets/img/doctors/book-doc-04.jpg";
import bookDocFive from "../assets/img/doctors/book-doc-05.jpg";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      variableWidth: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section id="doctors">
            <div className="section-header text-center">
                <h2>Top-Rated Doctors</h2>
                <p>Top Healthcare Professionals to Solve Your Health Issues.</p>
            </div>
        <Slider {...settings} className="container">
            
                <article style={{width: 300}}>
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

                <article style={{width: 300}}>
                    <div className="profile-widget">
                    <a href="#/">
                        <img src={bookDocFive} alt="#/" id="doc-img" />
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
        <button className=" btn view-btn">View More</button>
      </section>
    );
  }
}