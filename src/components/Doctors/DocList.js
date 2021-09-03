import React, {Component} from 'react';

const DocList = () => {
    return ( 
        <main>

		<div className="main-wrapper">

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
									<a href="map-grid.html" className="grid-view"><i className="fas fa-th-large"></i></a>
									<a href="map-list.html" className="list-view active"><i className="fas fa-bars"></i></a>
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
												<img src="../img/doctors/doctor-thumb-01.jpg" className="img-fluid" alt="User Image"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
											<p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
											<h5 className="doc-department">
                                                <img src="../img/specialities/specialities-05.png" className="img-fluid" alt="Speciality"/>Dentist</h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(17)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Florida, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href="../img/features/feature-01.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-01.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-02.jpg" data-fancybox="gallery">
															<img  src="../img/features/feature-02.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-03.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-03.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-04.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-04.jpg" alt="Feature"/>
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
											<a className="apt-btn" href="detail-page.html">Book Appointment</a>
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
												<img src="../img/doctors/doctor-thumb-02.jpg" className="img-fluid" alt="User Image"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
											<p className="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
											<h5 className="doc-department"><img src="../img/specialities/specialities-05.png" className="img-fluid" alt="Speciality"/>Dentist</h5>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(35)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href="../img/features/feature-01.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-01.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-02.jpg" data-fancybox="gallery">
															<img  src="../img/features/feature-02.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-03.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-03.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-04.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-04.jpg" alt="Feature"/>
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
											<a className="apt-btn" href="detail-page.html">Book Appointment</a>
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
												<img src="../img/doctors/doctor-thumb-03.jpg" className="img-fluid" alt="User Image"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Deborah Angel</a></h4>
											<p className="doc-speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
											<p className="doc-department"><img src="../img/specialities/specialities-04.png" className="img-fluid" alt="Speciality"/>Cardiology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(27)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Georgia, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href="../img/features/feature-01.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-01.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-02.jpg" data-fancybox="gallery">
															<img  src="../img/features/feature-02.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-03.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-03.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-04.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-04.jpg" alt="Feature"/>
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
											<a className="apt-btn" href="detail-page.html">Book Appointment</a>
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
												<img src="../img/doctors/doctor-thumb-04.jpg" className="img-fluid" alt="User Image"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Sofia Brient</a></h4>
											<p className="doc-speciality">MBBS, MS - General Surgery, MCh - Urology</p>
											<p className="doc-department"><img src="../img/specialities/specialities-01.png" className="img-fluid" alt="Speciality"/>Urology</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(4)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Louisiana, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href="../img/features/feature-01.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-01.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-02.jpg" data-fancybox="gallery">
															<img  src="../img/features/feature-02.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-03.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-03.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-04.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-04.jpg" alt="Feature"/>
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
											<a className="apt-btn" href="detail-page.html">Book Appointment</a>
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
												<img src="../img/doctors/doctor-thumb-06.jpg" className="img-fluid" alt="User Image"/>
											</a>
										</div>
										<div className="doc-info-cont">
											<h4 className="doc-name"><a href="doctor-profile.html">Dr. Katharine Berthold</a></h4>
											<p className="doc-speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
											<p className="doc-department"><img src="../img/specialities/specialities-03.png" className="img-fluid" alt="Speciality"/>Orthopaedics</p>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">(52)</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Texas, USA</p>
												<ul className="clinic-gallery">
													<li>
														<a href="../img/features/feature-01.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-01.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-02.jpg" data-fancybox="gallery">
															<img  src="../img/features/feature-02.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-03.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-03.jpg" alt="Feature"/>
														</a>
													</li>
													<li>
														<a href="../img/features/feature-04.jpg" data-fancybox="gallery">
															<img src="../img/features/feature-04.jpg" alt="Feature"/>
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
											<a className="apt-btn" href="detail-page.html">Book Appointment</a>
										</div>
									</div>
								</div>
							</div>
						</div>
							
					<div className="load-more text-center">
						<a className="btn btn-sm" href="javascript:void(0);">Load More</a>	
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