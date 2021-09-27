import { Container, Row } from "react-bootstrap";
import aWoman from '../../../assets/img/app/woman-app.jpg';
import './Appointment.css'

const Appointment = () => {
    return ( 
        <>
        <Container className='a-banner'>
            <Row>
                <div className="col-lg-6">
                    <img src={aWoman} alt="a-home" />
                </div>
                <div className="col-lg-6">
                    <section className='a-content'>
                    <h2>Book a Telephonic Consultation</h2>
                    <article className='con-content'>
                    <p>Book this method if you want consultation with me over Phone. 
                        This method is for those who are outside of Bangalore-India 
                        and unable to visit clinic and meet me personally. </p>
                        <button type="button" className="btn btn-success">Book Telephonic Appointment</button>
                    </article>
                    </section>
                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Appointment;