import React from 'react';
import { Container, Row } from "react-bootstrap";
import aWoman from '../../../../assets/img/app/woman-app.jpg';
import '../Appointment.css'

const Appointment = () => {
    return ( 
        <>
        <Container className='a-banner'>
            <Row>
                <div className="col-lg-6 col-m-6 col-sm-6">
                    <img src={aWoman} alt="a-home" />
                </div>
                <div className="col-lg-6 col-m-6 col-sm-6">
                <section className='a-content'>
                    <h2>Download Medatu App</h2>
                    <article className='con-content'>
                    <p>Get pregnancy care from the comfort of your home</p>

                   <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter your number to join the list"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Join</button>
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