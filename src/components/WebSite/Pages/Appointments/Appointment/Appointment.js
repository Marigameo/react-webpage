import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Container, Row } from "react-bootstrap";
import aHome from '../../../../assets/img/app/home.jpg';
import '../Appointment.css'

const Appointment = () => {
    const [value, setValue] = useState()
    return ( 
        <>
        <Container className='a-banner'>
            <Row>
                <div className="col-lg-6 col-m-6 col-sm-6">
                    <img src={aHome} alt="a-home" />
                </div>
                <div className="col-lg-6 col-m-6 col-sm-6">
                <section className='a-content'>
                    <h2>Book a Telephonic Consultation</h2>
                    <article className='con-content'>
                    <p>Download Medatu App<br/>
                    Book an Appointment<br/>
                    Enter your number to join the list</p>
                    <PhoneInput placeholder="Enter your phone number" value={value} onChange={setValue}/>
                </article>
                </section>
                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Appointment;