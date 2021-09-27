import { Container, Row } from "react-bootstrap";
import aWoman from '../../../../assets/img/app/vc.jpg';
import AppointmentsData from "../AppointmentsData";
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
                    <AppointmentsData/>
                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Appointment;