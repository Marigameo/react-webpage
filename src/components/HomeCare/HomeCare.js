import React, { Component } from 'react'
import './HomeCare.css'
// import {Link} from "react-router-dom";
import illustration from '../assets/img/home-care/illustration.svg'
import hOne from '../assets/img/home-care/01.jpg'
import hTwo from '../assets/img/home-care/02.jpg'
import hThree from '../assets/img/home-care/03.jpg'
import hFour from '../assets/img/home-care/04.jpg'
import hFive from '../assets/img/home-care/05.jpg'
import hSix from '../assets/img/home-care/06.jpg'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

export default class Blog extends Component {
    render() {
        return (
            <main style={{paddingTop: '6rem'}} className="main-wrapper"> 
            <section className="home-care-banner">
               <article className="banner-design">
                   <div className="home-care-header">
                       <h1>Professional Healthcare services, <br/>At the convenience of <br/>your Home.</h1>
                   </div>
                   <form action="" className='home-care-form'>
                   <label for="name">Your Name</label><br/>
                    <input placeHolder='Enter Your Name' type="text" id="name" name="name" /><br/>
                    <label for="numer">Your Phone Number</label><br/>
                    <input placeHolder='Enter Your Phone Number' type="number" id="number" name="number"/><br/><br/>
                    <aside className='c-express'>
                    <select name="" id="locate">
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                    </select>
                    <select name="" id="service">
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                        <option value="Lorem, ipsum.">Lorem, ipsum.</option>
                    </select>
                    </aside>
                    <input type="submit" value="Submit" className='btn-success btn-input'/>
                   </form>
               </article>
           </section>

<Container fluid="md" className='hcare-spec'>
  <div className="hcare-special">
      <FontAwesomeIcon icon={faSun}/>
      <h5>Doctor at Home</h5>
      <a className='kmore' href="know-more">Know More</a>
  </div>
  <div className="hcare-special">
      <FontAwesomeIcon icon={faSun}/>
      <h5>Nurse at Home</h5>
      <a className='kmore' href="know-more">Know More</a>
  </div>
  <div className="hcare-special">
      <FontAwesomeIcon icon={faSun}/>
      <h5>Vaccination at Home</h5>
      <a className='kmore' href="know-more">Know More</a>
  </div>
  <div className="hcare-special">
      <FontAwesomeIcon icon={faSun}/>
      <h5>Health Screening</h5>
      <a className='kmore' href="know-more">Know More</a>
  </div>
  <div className="hcare-special">
      <FontAwesomeIcon icon={faSun}/>
      <h5>Physical Therapy</h5>
      <a className='kmore' href="know-more">Know More</a>
  </div>
</Container>

            <section className="home-care-section">
                <article className="container">
                <div className="text-center">
            <h2 className="mt-2">What we offer</h2><br/>
            </div>
                <article className="row text-center">
                    <div className="col-lg-4">
                        <img src={hOne} alt="home-care-img-section" />
                        <h5>Doctor’s visit</h5>
                    </div>
                    <div className="col-lg-4">
                        <img src={hTwo} alt="home-care-img-section" />
                        <h5>Health screening </h5>
                    </div>
                    <div className="col-lg-4">
                        <img src={hThree} alt="home-care-img-section" />
                        <h5>Vaccination at home</h5>
                    </div>
                </article>

                <article className="row text-center">
                    <div className="col-lg-4">
                        <img src={hFour} alt="home-care-img-section" />
                        <h5>Physical therapy</h5>
                    </div>
                    <div className="col-lg-4">
                        <img src={hFive} alt="home-care-img-section" />
                        <h5>Health monitoring after a surgery</h5>
                    </div>
                    <div className="col-lg-4">
                        <img src={hSix} alt="home-care-img-section" />
                        <h5>Health monitoring while <br/>recovering an illness</h5>
                    </div>
                </article>
                </article>
            </section>

            <section className="container">
                <article className="row home-care-section-two">
                    <div className="col-lg-6">
                    <img src={illustration} alt="home-care-img-section" />
                    </div>
                    <div className="col-lg-6">
                        <h1>Home Care Services</h1>
                        <div className="text">
                        <p>Medical consultations at clinic or hospital often require transport arrangements and long waiting hours. It may expose you to various infections and compromise on quality care. </p>
                        <p>Medatu’s Home Care option brings stress-free healthcare services to your doorstep. Just choose your location and service you require. Our highly qualified and experienced doctors will provide best treatment at comfort of your home.</p>
                        </div>
                    </div>
                </article>
            </section>

            <section>
                <article className="text-center">
                    <div className="disclaimer">
                        <h3>Disclaimer</h3><br/>
                        <h5 className='text-center'>Medatu will provide Home Care services for manageable medical conditions only. <br/>Patients may need to visit hospital in case of emergency. </h5>
                    </div>
                </article>
            </section>
            
           </main>
        )
    }
}
