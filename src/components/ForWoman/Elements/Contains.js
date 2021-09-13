import React from 'react';
import {Row} from 'react-bootstrap';
import iOne from '../../assets/img/for-woman/illustration-1.svg'
// import iTwo from '../assets/img/for-woman/illustration-2.svg'

function Contains() {
  return(
    <Row className='sec-container'>
      <div className="col-lg-3">
        <img src={iOne} alt="iOne" width={60} height={60}/>
      </div>
      <div className="col-lg-9">
          Lorem ipsum dolor sit amet.    
      </div> 
    </Row>
  )
}

export default Contains;