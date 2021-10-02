import React from 'react';
import { Container } from 'react-bootstrap';


const Disclaimer = () => {
    return (  
        <Container>
            <div className="text-center disclaimer">
                <h3>Disclaimer</h3><br/>
                <h5 className='text-center'>Medatu will provide Home Care services for manageable medical conditions only. 
                <br/>Patients may need to visit hospital in case of emergency. </h5>
            </div>
        </Container>
            );
}
 
export default Disclaimer;