import React from 'react';
import { Row } from 'react-bootstrap';
import AppSection from '../DynamicComponents/AppSectionV/AppSection';
import MultipleItems from '../Doctors/Doctors/doctors';
import './VirtualCare.css'
import vBanner from '../assets/img/vbanner.jpg'
import FAQ from '../DynamicComponents/FAQ/FAQ'
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Search from '../DynamicComponents/SearchBar/app/Search';

function VirtualCare() {
  return (
    <>
    <section className="banner-vcare">
        <article className="banner-design">
            <div className="banner-header">
                <h1>Skip the Waiting Room.<br/>Connect to an online doctor now.</h1>
                <p>Starting at INR 129</p>
            </div>
            <div className="banner-search">
                <Search/>
            </div>
        </article>
    </section>
    <Specialitites/>
    
    <AppSection/>
    <div className="section-header text-center">
      <p className="section-p text-center">Top Online Doctors to Solve Your Health Issues.</p>
  </div> 
    <MultipleItems/>
      <Row>
        <img src={vBanner} alt="v-banner" />
      </Row>
    <FAQ/>
    </>
  );
}

export default VirtualCare;