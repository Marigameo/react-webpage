import React,{useEffect} from 'react';
import fOne from '../../../assets/img/features/feature-01.jpg'
import fTwo from '../../../assets/img/features/feature-02.jpg'
import fThree from '../../../assets/img/features/feature-03.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function PharmacySearch() {
	useEffect(() => {
        window.scroll(0,0)
    }, )
    return (
        <>
        <div style={{paddingTop:"125px"}}>
        
        <div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
						
					
							<div className="card search-filter">
								<div className="card-header">
									<h4 className="card-title mb-0">Search Filter</h4>
								</div>
								<div className="card-body">
								<div className="filter-widget">
									<label>Location</label>
									<input type="text" className="form-control" placeholder="Select Location" />
								</div>
								<div className="filter-widget">
									<h4>Categories</h4>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" />
											<span className="checkmark"></span> Popular
										</label>
									</div>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" />
											<span className="checkmark"></span> Latest
										</label>
									</div>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" />
											<span className="checkmark"></span> Ratings
										</label>
									</div>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" />
											<span className="checkmark"></span> Availability
										</label>
									</div>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" checked />
											<span className="checkmark"></span> Open 24 Hrs
										</label>
									</div>
									<div>
										<label className="custom_check">
											<input type="checkbox" name="gender_type" />
											<span className="checkmark"></span> Home Delivery
										</label>
									</div>
								</div>
								
									<div className="btn-search">
										<button type="button" className="btn btn-block">Search</button>
									</div>	
								</div>
							</div>
						
							
						</div>
						
						<div className="col-md-12 col-lg-8 col-xl-9">

						
							<div className="card">
								<div className="card-body">
									<div className="doctor-widget">
										<div className="doc-info-left">
											<div className="doctor-img1">
												<a href="pharmacy-details.html">
													<img src={fOne} width={170} height={180} className="img-fluid" alt="UserImage" />
												</a>
											</div>
											<div className="doc-info-cont">
												<h4 className="doc-name mb-2"><a href="pharmacy-details.html">Medlife Medical</a></h4>
												<div className="rating mb-2">
													<span className="badge badge-primary">4.0</span>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStarHalf}/>
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<div className="clinic-details">
													<div className="clini-infos pt-3">
												
													<p className="doc-location mb-2"><i className="fas fa-phone-volume mr-1"></i> 320-795-8815</p>
													<p className="doc-location mb-2 text-ellipse"><i className="fas fa-map-marker-alt mr-1"></i> 96 Red Hawk Road Cyrus, MN 56323 </p>
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Chemists, Surgical Equipment Dealer</p>
													
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Opens at 08.00 AM</p>
	
													</div>
												</div>
											</div>
										</div>
										<div className="doc-info-right">
											<div className="clinic-booking">
												<Link className="view-pro-btn" to="/product-description">View Details</Link>
												<a className="apt-btn" href="product-all.html">Browse Products</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						
							<div className="card">
								<div className="card-body">
									<div className="doctor-widget">
										<div className="doc-info-left">
											<div className="doctor-img1">
												<a href="pharmacy-details.html">
													<img src={fTwo} width={170} height={180} className="img-fluid" alt="UserImage" />
												</a>
											</div>
											<div className="doc-info-cont">
												<h4 className="doc-name mb-2"><a href="pharmacy-details.html">PharmaMed Medical</a></h4>
												<div className="rating mb-2">
													<span className="badge badge-primary">4.0</span>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStarHalf}/>
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<div className="clinic-details">
													<div className="clini-infos pt-3">
												
													<p className="doc-location mb-2"><i className="fas fa-phone-volume mr-1"></i> 913-631-2538</p>
													<p className="doc-location mb-2 text-ellipse"><i className="fas fa-map-marker-alt mr-1"></i> 3830 Poe Lane Kansas City, KS 66216 </p>
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Chemists, Surgical Equipment Dealer</p>
													
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Opens at 08.00 AM</p>
	
													</div>
												</div>
											</div>
										</div>
										<div className="doc-info-right">
											<div className="clinic-booking">
											<Link className="view-pro-btn" to="/product-description">View Details</Link>
												<a className="apt-btn" href="product-all.html">Browse Products</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						
							<div className="card">
								<div className="card-body">
									<div className="doctor-widget">
										<div className="doc-info-left">
											<div className="doctor-img1">
												<a href="pharmacy-details.html">
													<img src={fThree} width={170} height={180} className="img-fluid" alt="UserImage" />
												</a>
											</div>
											<div className="doc-info-cont">
												<h4 className="doc-name mb-2"><a href="pharmacy-details.html">The Pill Club Medical</a></h4>
												<div className="rating mb-2">
													<span className="badge badge-primary">4.0</span>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStar}/>
													<FontAwesomeIcon icon={faStarHalf}/>
													<span className="d-inline-block average-rating">(17)</span>
												</div>
												<div className="clinic-details">
													<div className="clini-infos pt-3">
												
													<p className="doc-location mb-2"><i className="fas fa-phone-volume mr-1"></i> 816-270-2336</p>
													<p className="doc-location mb-2 text-ellipse"><i className="fas fa-map-marker-alt mr-1"></i> 3849 Nutter Street Ferrelview, MO 64163 </p>
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Chemists, Surgical Equipment Dealer</p>
													
													<p className="doc-location mb-2"><i className="fas fa-chevron-right mr-1"></i> Opens at 08.00 AM</p>
	
													</div>
												</div>
											</div>
										</div>
										<div className="doc-info-right">
											
											<div className="clinic-booking">
											<Link className="view-pro-btn" to="/product-description">View Details</Link>
												<a className="apt-btn" href="product-all.html">Browse Products</a>
											</div>
										</div>
									</div>
								</div>
							</div>
					

							

							<div className="load-more text-center">
								<a className="btn btn-primary btn-md" href="#/">Load More</a>	
							</div>	
						</div>
					</div>

				</div>

			</div>	

        </div>
        </>
    )
}
