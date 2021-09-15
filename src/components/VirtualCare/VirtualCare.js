import React from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import AppSection from '../DynamicComponents/AppSection/AppSection';
import MultipleItems from '../DynamicComponents/Doctors/doctors';
import Search from '../DynamicComponents/SearchBar/app/Search';
import vBanner from '../assets/img/vbanner.jpg'
import FAQ from './FAQ/FAQ'

function VirtualCare() {
  return (
    <>
    <section className="banner-home">
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

    <AppSection/>
    <MultipleItems/>
      <Row>
        <img src={vBanner} alt="v-banner" />
      </Row>
    <Blog/>
    <FAQ/>
    </>
  );
}

export default VirtualCare;