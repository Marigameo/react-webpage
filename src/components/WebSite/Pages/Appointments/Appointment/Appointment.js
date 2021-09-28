import { Container, Row } from "react-bootstrap";
import aHome from '../../../../assets/img/app/home.jpg';
import AppointmentsData from "../AppointmentsData";
import '../Appointment.css'

const Appointment = () => {
    return ( 
        <>
        <Container className='a-banner'>
            <Row>
                <div className="col-lg-6 col-m-6 col-sm-6">
                    <img src={aHome} alt="a-home" />
                </div>
                <div className="col-lg-6 col-m-6 col-sm-6">
                   <AppointmentsData/>
                </div>
            </Row>
        </Container>
        </>
     );
}
 
export default Appointment;