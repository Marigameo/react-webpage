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
                    <h2>Download Medatu App</h2>
                    <article className='con-content'>
                    <p>Book an Appointment</p>
                   
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Join the list, now!" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Join</button>
                    </div>
                    </div>

                </article>
                </section>
                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Appointment;