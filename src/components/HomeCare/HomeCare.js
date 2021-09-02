import React, { Component } from 'react'
import './HomeCare.css'
// import {Link} from "react-router-dom";
import homeCareImg from '../assets/img/login-banner.png'
import hOne from '../assets/img/home-care/01.jpg'
import hTwo from '../assets/img/home-care/02.jpg'
import hThree from '../assets/img/home-care/03.jpg'
import hFour from '../assets/img/home-care/04.jpg'
import hFive from '../assets/img/home-care/05.jpg'
import hSix from '../assets/img/home-care/06.jpg'

export default class Blog extends Component {
    render() {
        return (
            <main className="main-wrapper">
            
            <section className="home-care-banner">
               <article className="banner-design">
                   <div className="home-care-header">
                       <h1>Professional <br/>Healthcare services,<br/>At the convenience <br/>of your Home.</h1>
                   </div>
               </article>
           </section>

            <section className="container">
                <article className="row home-care-section-two">
                    <div className="col-lg-6">
                    <img src={homeCareImg} alt="home-care-img-section" />
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

            <section>
                <article className="text-center">
                    <div className="disclaimer">
                        <h4>Disclaimer</h4><br/>
                        <p>Medatu will provide Home Care services for manageable medical conditions only. <br/>Patients may need to visit hospital in case of emergency. </p>
                    </div>
                </article>
            </section>
            
           </main>
        )
    }
}
