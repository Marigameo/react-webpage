import {Link} from "react-router-dom";
import React,{useState,useEffect} from 'react';
import DocListFaq from "../DynamicComponents/FAQ/DocListFaq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faStarHalf, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Docgallery from "./Docgallery";


const DocList = () => {
	
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
		  fetchData()  
		  window.scroll(0,0) 
    }, [])
    return ( 
<main>
<div className="main-wrapper">

<div className="breadcrumb-bar">
<div className="container-fluid">
<div className="row align-items-center">
<div className="col-md-12 col-12">
<nav aria-label="breadcrumb" className="page-breadcrumb">
<ol className="breadcrumb">
<li className="breadcrumb-item"><a href="index.html">Home</a></li>
<li className="breadcrumb-item active" aria-current="page">Blog</li>
</ol>
</nav>
<h2 className="breadcrumb-title">Blog Grid</h2>
</div>
</div>
</div>
</div>
<div className="content">
<div className="container-fluid">

<div className="row">
<div className="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">

<div className="row align-items-center mb-4">
<div className="col-md-6 col">
<h4>2245 Doctors found</h4>
</div>
<div className="col-md-6 col-auto">
<div className="view-icons">
<a href="map-grid.html" className="grid-view"><FontAwesomeIcon icon={faThLarge}/></a>
<a href="map-list.html" className="list-view active"><FontAwesomeIcon icon={faBars}/></a>
</div>
<div className="sort-by d-sm-block d-none">
<span className="sortby-fliter">
<select className="select">
<option>Sort by</option>
<option className="sorting">Rating</option>
<option className="sorting">Popular</option>
<option className="sorting">Latest</option>
<option className="sorting">Free</option>
</select>
</span>
</div>
</div>
</div>
<DocListFaq/>

{doctors.map((item, index) => {
	return (
<div className="card" key={item.registration_no}>
<div className="card-body">
<div className="doctor-widget">
<div className="doc-info-left">
<div className="doctor-img">
<a href="doctor-profile.html">
<img src={item.doctor_image} className="img-fluid" alt="userImg"/>
</a>
</div>
<div className="doc-info-cont">
<h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
<h5 className="doc-department">
<img src={item.iImg} className="img-fluid" alt="Speciality"/>Dentist</h5>
<div className="rating">
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStar}/>
<FontAwesomeIcon icon={faStarHalf}/>
<span className="d-inline-block average-rating">(17)</span>
</div>
<div className="clinic-details">
<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, USA</p>
<Docgallery/>
</div>
<div className="clinic-services">
<span>Dental Fillings</span>
<span> Whitneing</span>
</div>
</div>
</div>
<div className="doc-info-right">
<div className="clini-infos">
<ul>
<li><i className="far fa-thumbs-up"></i> 98% Patient Reviews</li>
<li><i className="far fa-comment"></i> 17 Feedback</li>
<li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
<br/>
<li><i className="far fa-money-bill-alt"></i>₹500 Consultation Fee <br/>In-Clinic<i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
</ul>
</div>
<div className="clinic-booking">
<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
<Link to="/doctors" className="apt-btn">Book Appointment</Link>
</div>
</div>
</div>
</div>
</div>
	)
})}
	<div className="load-more text-center">
<a className="btn btn-sm" href="#/">Load More</a>	
</div>
</div>

<div className="col-xl-5 col-lg-12 map-right">
<div className="wrapper">
  <div className="content">
    <div className="theiaStickySidebar">
    <h1>Hello World</h1>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>	
</div>
</main>
     );
}
 
export default DocList;