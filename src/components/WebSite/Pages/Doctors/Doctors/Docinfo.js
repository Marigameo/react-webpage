import React, { Component } from "react";
import './Docinfo.css'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import bookDocOne from "../../../../assets/img/doctors/book-doc-01.jpg";
// import bookDocTwo from "../../../../assets/img/doctors/book-doc-02.jpg";
import bookDocThree from "../../../../assets/img/doctors/book-doc-03.jpg";
import bookDocFour from "../../../../assets/img/doctors/book-doc-04.jpg";
import { Container } from "react-bootstrap";

export default class Docinfo extends Component {
    constructor(props) {
        super(props);

        this.state ={
            aOne: null,
            aTwo: null,
            aThree: null,
            bOne: null,
            bTwo: null,
            cOne: null,
            cTwo: null,
        }
    }

     async componentDidMount() {
        const reqOptions ={
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({location: 'bangalore', longitude: 1, latitude: 1})
        };
        const response = await fetch('http://184.168.117.236/test/admin/api_doctor.php', reqOptions)
        const data = await response.json();
        this.setState({ aOne : data[0].name, aTwo : data[0].qualification, aThree : data[0].doctor_image })
        this.setState({ bOne : data[1].name, bTwo : data[1].qualification})
        this.setState({ cOne : data[2].name, cTwo : data[2].qualification})
    }

    render() {
        const { aOne } = this.state
        const { aTwo } = this.state
        // const { aThree } = this.state
        const { bOne } = this.state
        const { bTwo } = this.state
        const { cOne } = this.state
        const { cTwo } = this.state

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
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
            <article id='view-btn'>
            <Slider {...settings}>
          <article>
        <div className="profile-widget">
        <a href="#/">
            <img src={bookDocOne} alt="#/" id="doc-img" />
        </a>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">{aOne}</a></h3>
            <div>
                <h5 id="pro-sub">{aTwo}</h5>
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
            <h3 id="pro-name"><a href="#/">{bOne}</a></h3>
            <div>
                <h5 id="pro-sub">{bTwo}</h5>
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
            <h3 id="pro-name"><a href="#/">{cOne}</a></h3>
            <div>
                <h5 id="pro-sub">{cTwo}</h5>
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

          <Link to='/doctors'>
          <button className="btn view-btn">Read More</button>
          </Link>
        
            </article>
        </Container>
      );
    }
  }
