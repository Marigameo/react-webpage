import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//images
import sOne from "../assets/img/specialities/specialities-01.png";
import sTwo from "../assets/img/specialities/specialities-02.png";
import sThree from "../assets/img/specialities/specialities-03.png";
import sFour from "../assets/img/specialities/specialities-04.png";
import sFive from "../assets/img/specialities/specialities-05.png";
import sSix from "../assets/img/specialities/specialities-06.png";
import sSeven from "../assets/img/specialities/specialities-07.png";
import sEight from "../assets/img/specialities/specialities-08.png";
// import sNine from "../assets/img/specialities/specialities-09.png";
// import sTen from "../assets/img/specialities/specialities-10.png";
// import sEleven from "../assets/img/specialities/specialities-11.png";
// import sTwelve from "../assets/img/specialities/specialities-12.png";
// import sThirteen from "../assets/img/specialities/specialities-13.png";
// import sFourteen from "../assets/img/specialities/specialities-14.png";
// import sFifteen from "../assets/img/specialities/specialities-15.png";
// import sSixteen from "../assets/img/specialities/specialities-16.png";
// import sSeventeen from "../assets/img/specialities/specialities-17.png";
// import sEighteen from "../assets/img/specialities/specialities-18.png";
// import sNineteen from "../assets/img/specialities/specialities-19.png";
// import sTwenty from "../assets/img/specialities/specialities-20.png";
// import sTwentyOne from "../assets/img/specialities/specialities-21.png";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
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
        <section className="section section-specialities" id='view-btn'>
        <div className="container">
                <div className="section-header text-center">
                    <h2>Clinics and Specialities</h2>
                </div>
        <Slider {...settings}>
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sOne} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Urology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sTwo} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Neurology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sThree} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Orthopaedics</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sFour} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Cardiology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sFive} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Dentistry</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sSix} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Ophthalmology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sSeven} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Paediatrics</p>
        </div>
                <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sEight} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Oncology</p>
        </div>	
        {/* <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sNine} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Allergy</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sTen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Diet</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sEleven} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Pulmonology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sTwelve} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Endocrinology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sThirteen} className="img-fluid" alt="Speciality"/>
            </Link> 
          </div>
          <p>General Physician</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sFourteen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>ENT Doctor</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sFifteen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Dermatology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sSixteen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Gynaecology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sSeventeen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Gastroenterology</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sEighteen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Ayurvedic</p>
        </div>
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sNineteen} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Homeopathy</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sTwenty} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Physical Therapy</p>
        </div>	
        <div className="speicality-item text-center">
          <div className="speicality-img">
            <Link to='/doctors'>
            <img src={sTwentyOne} className="img-fluid" alt="Speciality"/>
            </Link>
          </div>
          <p>Veterinary</p>
        </div> */}
        </Slider>
        </div>
        <button className="btn view-btn">View More</button>
        </section>
    );
  }
}