import React, { useEffect, useState } from "react";
import './Docinfo.css'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function DocHome() {

    const [ doctors, setDoctor ] = useState([]);

    useEffect(() => {

async function fetchData() {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({location: 'bangalore', longitude: 1, latitude: 1})
        };
        const response = await fetch('http://184.168.117.236/test/admin/api_doctor.php', requestOptions)
        const data = await response.json();
        setDoctor(data)
    }
  catch(error) {
      console.log('error occured', error)
  }
}
fetchData();
    }, [])
    return (
        <Container>
            <article id='view-btn'>

            <article style={{display: 'flex'}}>
{doctors.map((item, index) => {
    return(
       
        <div className="profile-widget" key={item.name}>

        <Link to='/doctors'>
        <img src={item.doctor_image} alt="#/" id="doc-img"/>
        <div className="provider-info">
            <h3 id="pro-name"><a href="#/">{item.name}</a></h3>
            <div>
                <h5 id="pro-sub">{item.qualification}</h5>
                <div className="rating">
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStar}/>
                    <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt}/>&nbsp;&nbsp;
                    <span className="d-inline-block average-rating">3.5</span>
                </div>
            </div>
        </div>
        </Link>

        </div>

    )
})}
    </article>
<Link to='/doctors'>
<button className="btn view-btn">Read More</button>
</Link>
        
    </article>
</Container>
    )
}
