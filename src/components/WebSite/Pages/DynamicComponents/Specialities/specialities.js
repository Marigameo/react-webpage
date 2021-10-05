import React, { Component } from "react";
import Slider from "react-slick";
import './specialities.css'
import { Link } from "react-router-dom";

import sFour from "../../../../assets/img/specialities/specialities-04.png";
import sFive from "../../../../assets/img/specialities/specialities-05.png";
import sSix from "../../../../assets/img/specialities/specialities-06.png";
import sSeven from "../../../../assets/img/specialities/specialities-07.png";
import sTen from "../../../../assets/img/specialities/specialities-10.png";
import sThirteen from "../../../../assets/img/specialities/specialities-13.png";
import { Container } from "react-bootstrap";

export default class Specialitites extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
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
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <Container className='speciality'>
      
        <div className="section-header text-center">
        <h2>Clinics and Specialities</h2>
        </div>
        <Slider {...settings}>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sThirteen} alt="Speciality"/> 
        </div>
      </Link>
      <p>General Physician</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sSeven} alt="Speciality"/> 
        </div>
      </Link>
      <p>Paediatrician</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sFive} alt="Speciality"/> 
        </div>
      </Link>
      <p>Dentist</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sFour} alt="Speciality"/> 
        </div>
      </Link>
      <p>Orthopaedics</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sSix} alt="Speciality"/> 
        </div>
      </Link>
      <p>Ophthalmology</p>
      </aside>
  </article>

  <article className='s-items'>
    <aside className="speicality-item">
      <Link to='/doctors'> 
        <div id='img-spec'>
          <img src={sTen} alt="Speciality"/> 
        </div>
      </Link>
      <p>ENT Doctor</p>
      </aside>
  </article> 

</Slider>

<Link to='/s-list'>
  <div id='view-btn'>
  <button className="btn view-btn">View More</button>
  </div>

</Link>
      </Container>
    );
  }
}


          