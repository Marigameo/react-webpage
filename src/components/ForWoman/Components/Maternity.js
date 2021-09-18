import React from 'react';
import {Container, Row} from 'react-bootstrap'

const Maternity = () => {
  return (
    <section className='fw-sec1'>
    <Container>
    <Row>
        <div className="col-lg-8"></div>
        <div className="col-lg-4">
            <h2>Maternity</h2>
            <p>Medatu provides comprehensive pregnancy packages with complete digital guidance on diet and exercise.</p>
            <button type="button" class="btn btn-success">Know More</button>
        </div>
    </Row>
    </Container>
</section>
  );
};

export default Maternity;