import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap'
import Slider from "react-slick";
import './Service.css'

//images
import hOne from '../../../../assets/img/home-care/01.jpg'
import hTwo from '../../../../assets/img/home-care/02.jpg'
import hThree from '../../../../assets/img/home-care/03.jpg'
import hFour from '../../../../assets/img/home-care/04.jpg'
import hFive from '../../../../assets/img/home-care/05.jpg'

export default class Service extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 0,
        initialSlide: 0,
        variableWidth: true,
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
        <Container fluid>
        <Slider {...settings}>
            <div className='hcare-special'>
                <img src={hOne} alt="iImg" width={180} height={120}/>
                <h5 className='h5-service'>Doctor at Home</h5> 
                <Link to='s-km' className='kmore'>Know More</Link>
            </div>

            <div className='hcare-special'>
                <img src={hTwo} alt="iImg" width={180} height={120}/>
                <h5 className='h5-service'>Nurse at Home</h5> <Link to='s-km' className='kmore'>Know More</Link>
            </div>
            
            <div className='hcare-special'>
                <img src={hThree} alt="iImg" width={180} height={120}/>
                <h5 className='h5-service'>Vaccination at Home</h5> <Link to='s-km' className='kmore'>Know More</Link>
            </div>
            
            <div className='hcare-special'>
                <img src={hFour} alt="iImg" width={180} height={120}/>
                <h5 className='h5-service'>Health Screening</h5> <Link to='s-km' className='kmore'>Know More</Link>
            </div>
            
            <div className='hcare-special'>
                <img src={hFive} alt="iImg" width={180} height={120}/>
                <h5 className='h5-service'>Physical Therapy</h5> <Link to='s-km' className='kmore'>Know More</Link>
            </div>
        </Slider>
        </Container>
    );
  }
}