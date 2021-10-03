import '../../../../../assets/additional/css/styleTwo.css'
import React,{useState,useEffect} from 'react';
import './Doc.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faGraduationCap, faLocationArrow, faNewspaper, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const DocA = () => {

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
    <div style={{paddingTop: '6rem'}}></div>
{doctors.map((item, index) => {
    return(
<div className="container margin_60" key={item.name}>
			<div className="row">
				<aside className="col-xl-3 col-lg-4" id="sidebar">
					<div className="box_profile">
						<figure>
							<img src={item.doctor_image} alt="" className="img-fluid"/>
						</figure>
						<small>Qualification: {item.qualification} </small><br/>
                        
						<h1>{item.name}</h1>
                        <small className='location'>Location: {item.location}</small>
						<span className="rating">
							{item.awards}
							<a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><FontAwesomeIcon icon={faTrophy}/></a>
                            ({item.rating} star rating)
                        </span>
                        
						<ul className="statistic">
							<li>854 Views</li>
							<li>{item.experience} years experience</li>
						</ul>
						<ul className="contacts">
							<li><h6>Address</h6>{item.address}</li>
							<li><h6>Phone No:</h6><a href={`tel://${item.phone_number}`}>{item.phone_number}</a></li>
                            <li><h6>Email</h6><a href="#/">{item.email_address}</a></li>
                            <li><h6>Known Languages</h6><a href="#/">{item.language_known}</a></li>
						</ul>
						<div className="text-center"><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" className="btn_1 outline" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faLocationArrow}/> View on map</a></div>
					</div>
				</aside>
		
				<div className="col-xl-9 col-lg-8">
					
					<div className="box_general_2 add_bottom_45">
						<div className="main_title_4">
							<h3><i className="icon_circle-slelected"></i>Select your date and time</h3>
						</div>
						
						<div className="row add_bottom_45">
							<div className="col-lg-7">
								<div className="form-group">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione maiores vitae inventore quas sunt soluta reprehenderit eveniet dolorum suscipit tempora vero quam, ipsam a natus ut, sequi officiis. Saepe?</p>
									
                                    <div id="calendar"></div>
									<ul className="legend">
										<li><strong></strong>Available</li>
										<li><strong></strong>Not available</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-5">
								<ul className="time_select version_2 add_top_20">
									<li>
										<input type="radio" id="radio1" name="radio_time" value="09.30am"/>
										<label htmlFor="radio1">09.30am</label>
									</li>
									<li>
										<input type="radio" id="radio2" name="radio_time" value="10.00am"/>
										<label htmlFor="radio2">10.00am</label>
									</li>
									<li>
										<input type="radio" id="radio3" name="radio_time" value="10.30am"/>
										<label htmlFor="radio3">10.30am</label>
									</li>
									<li>
										<input type="radio" id="radio4" name="radio_time" value="11.00am"/>
										<label htmlFor="radio4">11.00am</label>
									</li>
									<li>
										<input type="radio" id="radio5" name="radio_time" value="11.30am"/>
										<label htmlFor="radio5">11.30am</label>
									</li>
									<li>
										<input type="radio" id="radio6" name="radio_time" value="12.00am"/>
										<label htmlFor="radio6">12.00am</label>
									</li>
									<li>
										<input type="radio" id="radio7" name="radio_time" value="01.30pm"/>
										<label htmlFor="radio7">01.30pm</label>
									</li>
									<li>
										<input type="radio" id="radio8" name="radio_time" value="02.00pm"/>
										<label htmlFor="radio8">02.00pm</label>
									</li>
									<li>
										<input type="radio" id="radio9" name="radio_time" value="02.30pm"/>
										<label htmlFor="radio9">02.30pm</label>
									</li>
									<li>
										<input type="radio" id="radio10" name="radio_time" value="03.00pm"/>
										<label htmlFor="radio10">03.00pm</label>
									</li>
									<li>
										<input type="radio" id="radio11" name="radio_time" value="03.30pm"/>
										<label htmlFor="radio11">03.30pm</label>
									</li>
									<li>
										<input type="radio" id="radio12" name="radio_time" value="04.00pm"/>
										<label htmlFor="radio12">04.00pm</label>
									</li>
								</ul>
							</div>
						</div>
					
						
						<div className="main_title_4">
							<h3><i className="icon_circle-slelected"></i>What is the reason for your visit?</h3>
						</div>
                        <select name="problems" id="problems">
                            <option value="probs" id="probs">Diabetes consultation</option>
                            <option value="probs" id="probs">Food intollerance visit</option>
                            <option value="probs" id="probs">Foot Pain visit</option>
                            <option value="probs" id="probs">Icontinence visit</option>
                            <option value="probs" id="probs">Neck Pain visit</option>
                        </select>
						
						<p id="visit-book" className="text-center">
							<Link to="/payment" className="btn_1 medium">Book Now</Link>
						</p>

					<div style={{marginTop: '1rem'}} className="tabs_styled_2">
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-expanded="true">General info</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews">Reviews</a>
							</li>
						</ul>
			
						<div className="tab-content">
							<div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
								
								<p className="lead add_bottom_30">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
								<div className="indent_title_in">
                                    <div className="row">
                                        <div className="col-lg-1">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </div>
                                        <div className="col-lg-11">
                                            <h3>Professional statement</h3>
									        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                                        </div>
                                    </div>
								</div>
								<div className="wrapper_indent">
									<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
									<h6>Specializations</h6>
									<div className="row">
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
										<div className="col-lg-6">
											<ul className="bullets">
												<li>Abdominal Radiology</li>
												<li>Addiction Psychiatry</li>
												<li>Adolescent Medicine</li>
												<li>Cardiothoracic Radiology </li>
											</ul>
										</div>
									</div>
								
								</div>
						
								
								<hr/>
								
								<div className="indent_title_in">
                                    <div className="row">
                                    <div className="col-lg-1">
                                        <FontAwesomeIcon icon={faNewspaper}/>
                                    </div>
									<div className="col-lg-11">
                                        <h3>Education</h3>
                                        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                                    </div>
                                    </div>
								</div>
								<div className="wrapper_indent">
									<p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Nullam mollis. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapi.</p>
									<h6>Curriculum</h6>
									<ul className="list_edu">
                                        <div className="row">
                                            <div className="col-lg-1">
                                            <FontAwesomeIcon icon={faGraduationCap}/>
                                            </div>
                                            <div className="col-lg-11">
                                            <li><strong>New York Medical College</strong> - Doctor of Medicine</li>
                                            </div>
                                        </div>
										<div className="row">
                                            <div className="col-lg-1">
                                            <FontAwesomeIcon icon={faGraduationCap}/>
                                            </div>
                                            <div className="col-lg-11">
                                            <li><strong>Montefiore Medical Center</strong> - Residency in Internal Medicine</li>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1">
                                            <FontAwesomeIcon icon={faGraduationCap}/>
                                            </div>
                                            <div className="col-lg-11">
                                            <li><strong>New York Medical College</strong> - Master Internal Medicine</li>
                                            </div>
                                        </div>
										
										
									</ul>
								</div>
							
								
								<hr/>

								<div className="indent_title_in">
                                <div className="row">
                                    <div className="col-lg-1">
                                        <FontAwesomeIcon icon={faBullseye}/>
                                    </div>
                                    <div className="col-lg-11">
                                        <h3>Prices &amp; Payments</h3>
                                        <p>Mussum ipsum cacilds, vidis litro abertis.</p>
                                    </div>
                                </div>   
								</div>
								<div className="wrapper_indent">
									<p>Zril causae ancillae sit ea. Dicam veritus mediocritatem sea ex, nec id agam eius. Te pri facete latine salutandi, scripta mediocrem et sed, cum ne mundi vulputate. Ne his sint graeco detraxit, posse exerci volutpat has in.</p>
									<div className="table-responsive">
									<table className="table table-striped">
										<thead>
											<tr>
												<th>Service - Visit</th>
												<th>Price</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>New patient visit</td>
												<td>$34</td>
											</tr>
											<tr>
												<td>General consultation</td>
												<td>$60</td>
											</tr>
											<tr>
												<td>Back Pain</td>
												<td>$40</td>
											</tr>
											<tr>
												<td>Diabetes Consultation</td>
												<td>$55</td>
											</tr>
											<tr>
												<td>Eating disorder</td>
												<td>$60</td>
											</tr>
											<tr>
												<td>Foot Pain</td>
												<td>$35</td>
											</tr>
										</tbody>
									</table>
									</div>
								</div>
						

							</div>
						

							<div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
								<div className="reviews-container">
									<div className="row">
										<div className="col-lg-3">
											<div id="review_summary">
												<strong>4.7</strong>
												<div className="rating">
													<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
												</div>
												<small>Based on 4 reviews</small>
											</div>
										</div>
										<div className="col-lg-9">
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>5 stars</strong></small></div>
											</div>
										
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>4 stars</strong></small></div>
											</div>
										
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>3 stars</strong></small></div>
											</div>
										
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>2 stars</strong></small></div>
											</div>
										
											<div className="row">
												<div className="col-lg-10 col-9">
													<div className="progress">
														<div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												<div className="col-lg-2 col-3"><small><strong>1 stars</strong></small></div>
											</div>
										</div>
									</div>
									
									<hr/>
									
									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Admin – April 03, 2016:
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>
									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Ahsan – April 01, 2016
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>

									<div className="review-box clearfix">
										<figure className="rev-thumb"><img src="http://via.placeholder.com/150x150.jpg" alt=""/>
										</figure>
										<div className="rev-content">
											<div className="rating">
												<i className="icon-star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
											</div>
											<div className="rev-info">
												Sara – March 31, 2016
											</div>
											<div className="rev-text">
												<p>
													Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis
												</p>
											</div>
										</div>
									</div>
								</div>
								<hr/>
								<div className="text-right"><a href="submit-review.html" className="btn_1 add_bottom_15">Submit review</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
})}
		
	<div id="toTop"></div>
	</main>
     );
}
 
export default DocA;