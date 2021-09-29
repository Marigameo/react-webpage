import React, { useState } from 'react';
import { Container, Row } from "react-bootstrap";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import aWoman from '../../../../assets/img/app/woman-app.jpg';
import '../Appointment.css'

const Appointment = () => {
    const [value, setValue] = useState()
    return ( 
        <>
        <Container className='a-banner'>
            <Row>
                <div className="col-lg-6 col-m-6 col-sm-6">
                    <img src={aWoman} alt="a-home" />
                </div>
                <div className="col-lg-6 col-m-6 col-sm-6">
                <section className='a-content'>
                    <h2>Book a Telephonic Consultation</h2>
                    <article className='con-content'>
                    <p>Download Medatu App<br/>
                    Get pregnancy care from the comfort of your home<br/>
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