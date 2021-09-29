import React, {useEffect} from 'react';
import { Row } from 'react-bootstrap';
import './VirtualCare.css'
import vBanner from '../../../assets/img/vbanner.jpg'
import FAQ from '../DynamicComponents/FAQ/FAQ'
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Search from '../DynamicComponents/SearchBar/app/Search';
import Space from '../DynamicComponents/Space/Space';
import Appointment from '../Appointments/AppointmentVC/Appointment';
import DocHome from '../Doctors/Doctors/DocHome';

function VirtualCare() {
  useEffect(() => {
    window.scroll(0,0)
}, )
  return (
    <>
    <Space/>
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
<Appointment/>
    <div className="section-header text-center">
      <p className="section-p text-center">Top Online Doctors to Solve Your Health Issues.</p>
  </div> 
 <DocHome/>
      <Row>
        <img src={vBanner} alt="v-banner" />
      </Row>
    <FAQ/>
    </>
  );
}

export default VirtualCare;