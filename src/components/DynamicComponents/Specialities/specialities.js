import React, { Component } from "react";
import { Link } from "react-router-dom";

//images
import sOne from "../../assets/img/specialities/specialities-01.png";
import sTwo from "../../assets/img/specialities/specialities-02.png";
import sThree from "../../assets/img/specialities/specialities-03.png";
import sFour from "../../assets/img/specialities/specialities-04.png";
import sFive from "../../assets/img/specialities/specialities-05.png";
import sSix from "../../assets/img/specialities/specialities-06.png";
// import sSeven from "../../assets/img/specialities/specialities-07.png";
// import sEight from "../../assets/img/specialities/specialities-08.png";
// import sNine from "../../assets/img/specialities/specialities-09.png";
// import sTen from "../../assets/img/specialities/specialities-10.png";
// import sEleven from "../../assets/img/specialities/specialities-11.png";
// import sTwelve from "../../assets/img/specialities/specialities-12.png";
// import sThirteen from "../../assets/img/specialities/specialities-13.png";
// import sFourteen from "../../assets/img/specialities/specialities-14.png";
// import sFifteen from "../../assets/img/specialities/specialities-15.png";
// import sSixteen from "../../assets/img/specialities/specialities-16.png";
// import sSeventeen from "../../assets/img/specialities/specialities-17.png";
// import sEighteen from "../../assets/img/specialities/specialities-18.png";
// import sNineteen from "../../assets/img/specialities/specialities-19.png";
// import sTwenty from "../../assets/img/specialities/specialities-20.png";
// import sTwentyOne from "../../assets/img/specialities/specialities-21.png";

export default class Responsive extends Component {
  render() {
    return (
<section className="container section section-specialities" >
<article id='view-btn'>
        <div className="section-header text-center">
            <h2>Clinics and Specialities</h2>
        </div>

<aside className='s-items'>
<div className="speicality-item">
  <Link to='/doctors'>
    <div id='img-spec'>
      <img src={sOne} alt="Speciality"/> 
    </div>
  </Link>
  <p>General Physician</p>
</div>	

<div className="speicality-item">
  <Link to='/doctors'>
    <div id='img-spec'>
      <img src={sTwo} alt="Speciality"/>
    </div>
  </Link>
  <p>Paediatrician</p>
</div>	
       
<div className="speicality-item">
  <Link to='/doctors'>
    <div id='img-spec'>
      <img src={sThree} alt="Speciality"/>
    </div>
  </Link>
  <p>Dentist</p>
</div>	

<div className="speicality-item">
  <Link to='/doctors'>
    <div id='img-spec'>
      <img src={sFour} alt="Speciality"/>
    </div>
  </Link>
  <p>Orthopaedics</p>
</div>

<div className="speicality-item">
  <Link to='/doctors'>
    <div id='img-spec'>
      <img src={sFive} alt="Speciality"/>
    </div>
  </Link>
  <p>Ophthalmology</p>
</div>	

<div className="speicality-item">
  <Link to='/doctors'>
  <div id='img-spec'>
    <img src={sSix} alt="Speciality"/>
  </div></Link>
  <p>ENT Doctor</p>
</div>	
</aside>
<button className="btn view-btn">View More</button>
        </article>
        
        </section>
    );
  }
}


          