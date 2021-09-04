import {Link} from "react-router-dom";
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStar, faStarHalf, faThLarge } from '@fortawesome/free-solid-svg-icons';
import docOne from '../assets/img/doctors/book-doc-01.jpg'
import docTwo from '../assets/img/doctors/book-doc-02.jpg'
import docThree from '../assets/img/doctors/book-doc-03.jpg'
import docFour from '../assets/img/doctors/book-doc-04.jpg'
import docFive from '../assets/img/doctors/book-doc-05.jpg'
import iOne from '../assets/img/specialities/specialities-01.png'
import iTwo from '../assets/img/specialities/specialities-02.png'
import iThree from '../assets/img/specialities/specialities-03.png'
import iFour from '../assets/img/specialities/specialities-04.png'
import iFive from '../assets/img/specialities/specialities-05.png'

const DocList = () => {
	useEffect(() => {
        window.scroll(0,0)
    }, )
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

						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<a href="doctor-profile.html">
												<img src={docOne} className="img-fluid" alt="userImg"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
											<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<h5 className="doc-department">
                                                <img src={iOne} className="img-fluid" alt="Speciality"/>Dentist</h5>
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
												<ul className="clinic-gallery">
													<li>
														<a href={docTwo} data-fancybox="gallery">
															<img src={docTwo} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFive} data-fancybox="gallery">
															<img  src={docFive} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docThree} data-fancybox="gallery">
															<img src={docThree} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFour} data-fancybox="gallery">
															<img src={docFour} alt="Feature"/>
														</a>
													</li>
												</ul>
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
												<li><i className="far fa-thumbs-up"></i> 98%</li>
												<li><i className="far fa-comment"></i> 17 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Florida, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
											</ul>
										</div>
										<div className="clinic-booking">
											<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
											<Link to="/doctor" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<a href="doctor-profile.html">
												<img src={docTwo} className="img-fluid" alt="userImg"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
											<p className="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
											<h5 className="doc-department"><img src={iTwo} className="img-fluid" alt="Speciality"/>Dentist</h5>
											<div className="rating">
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStarHalf}/>
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href={docOne} data-fancybox="gallery">
															<img src={docOne} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docThree} data-fancybox="gallery">
															<img  src={docThree} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFour} data-fancybox="gallery">
															<img src={docFour} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFive} data-fancybox="gallery">
															<img src={docFive} alt="Feature"/>
														</a>
													</li>
												</ul>
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
												<li><i className="far fa-thumbs-up"></i> 100%</li>
												<li><i className="far fa-comment"></i> 35 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $50 - $300 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
											</ul>
										</div>
										<div className="clinic-booking">
											<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
												<Link to="/doctor" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<a href="doctor-profile.html">
												<img src={docThree} className="img-fluid" alt="userImg"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Deborah Angel</a></h4>
											<p className="doc-speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
											<p className="doc-department"><img src={iThree} className="img-fluid" alt="Speciality"/>Cardiology</p>
											<div className="rating">
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStarHalf}/>
												<span className="d-inline-block average-rating">(27)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Georgia, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href={docOne} data-fancybox="gallery">
															<img src={docOne} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docTwo} data-fancybox="gallery">
															<img  src={docTwo} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFour} data-fancybox="gallery">
															<img src={docFour} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFive} data-fancybox="gallery">
															<img src={docFive} alt="Feature"/>
														</a>
													</li>
												</ul>
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
												<li><i className="far fa-thumbs-up"></i> 99%</li>
												<li><i className="far fa-comment"></i> 35 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $100 - $400 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
											</ul>
										</div>
										<div className="clinic-booking">
											<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
												<Link to="/doctor" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
				
						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<a href="doctor-profile.html">
												<img src={docFour} className="img-fluid" alt="userImg"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Sofia Brient</a></h4>
											<p className="doc-speciality">MBBS, MS - General Surgery, MCh - Urology</p>
											<p className="doc-department"><img src={iFour} className="img-fluid" alt="Speciality"/>Urology</p>
											<div className="rating">
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStarHalf}/>
												<span className="d-inline-block average-rating">(4)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Louisiana, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href={docOne} data-fancybox="gallery">
															<img src={docOne} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docTwo} data-fancybox="gallery">
															<img  src={docTwo} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docThree} data-fancybox="gallery">
															<img src={docThree} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFour} data-fancybox="gallery">
															<img src={docFour} alt="Feature"/>
														</a>
													</li>
												</ul>
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
												<li><i className="far fa-thumbs-up"></i> 97%</li>
												<li><i className="far fa-comment"></i> 4 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Newyork, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $150 - $250 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
											</ul>
										</div>
										<div className="clinic-booking">
											<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
												<Link to="/doctor" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-body">
								<div className="doctor-widget">
									<div className="doc-info-left">
										<div className="doctor-img">
											<a href="doctor-profile.html">
												<img src={docFive} className="img-fluid" alt="userImg"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Katharine Berthold</a></h4>
											<p className="doc-speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
											<p className="doc-department"><img src={iFive} className="img-fluid" alt="Speciality"/>Orthopaedics</p>
											<div className="rating">
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStar}/>
												<FontAwesomeIcon icon={faStarHalf}/>
												<span className="d-inline-block average-rating">(52)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Texas, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href={docTwo} data-fancybox="gallery">
															<img src={docTwo} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docThree} data-fancybox="gallery">
															<img  src={docThree} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docFour} data-fancybox="gallery">
															<img src={docFour} alt="Feature"/>
														</a>
													</li>
													<li>
														<a href={docOne} data-fancybox="gallery">
															<img src={docOne} alt="Feature"/>
														</a>
													</li>
												</ul>
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
												<li><i className="far fa-thumbs-up"></i> 100%</li>
												<li><i className="far fa-comment"></i> 52 Feedback</li>
												<li><i className="fas fa-map-marker-alt"></i> Texas, USA</li>
												<li><i className="far fa-money-bill-alt"></i> $100 - $500 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i></li>
											</ul>
										</div>
										<div className="clinic-booking">
											<a className="view-pro-btn" href="doctor-profile.html">Video Call</a>
												<Link to="/doctor" className="apt-btn">Book Appointment</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
							
					<div className="load-more text-center">
						<a className="btn btn-sm" href="#/">Load More</a>	
					</div>
	            </div>
	            
	            <div className="col-xl-5 col-lg-12 map-right">
	                <div id="map" className="map-listing"></div>
	            
	            </div>
	            
	        </div>
	   
				</div>

			</div>	
		   
		</div>
        </main>
     );
}
 
export default DocList;