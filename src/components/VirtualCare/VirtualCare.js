import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import AppSection from '../DynamicComponents/AppSection/AppSection';
import MultipleItems from '../DynamicComponents/Doctors/doctors';
import Search from '../DynamicComponents/SearchBar/app/Search';
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
    <Container>
      <Row>
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <h2>How Medatu’s virtual consultation work?</h2>
          <ul>
            <li>Talk to a doctor online via message, call, or video call.</li>
            <li>Get medicines delivered to your home.</li>
            <li>If required, book a lab test, and get reports online.</li>
            <li>Follow-up with your doctor.</li>
            <li>Medical records are kept confidential and accessible only by you.</li>
          </ul>
        </div>
      </Row>
    </Container>
    <Blog/>
    <FAQ/>
    </>
  );
}

export default VirtualCare;