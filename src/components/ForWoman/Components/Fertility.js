import React from 'react';
import {Container, Row} from 'react-bootstrap'

const Fertility = () => {
  return (
    <section className='fw-sec2'>
    <Container>
    <Row>
        <div className="col-lg-5">
            <h2>Fertility Care</h2>
            <p>At Medatu, we connect you to our best fertility care experts.</p>
            <button type="button" class="btn btn-success">Know More</button>
        </div>
        <div className="col-lg-7"></div>
    </Row>
    </Container>
</section>
  );
};

export default Fertility;