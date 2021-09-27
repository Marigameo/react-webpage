import React,{useEffect} from 'react';
import { Link } from 'react-router-dom'
import doc from '../../../assets/img/doctors/book-doc-01.jpg'

export default function Payment() {
	useEffect(() => {
        window.scroll(0,0)
    }, )

    return (
        <>
        <div  style={{paddingTop:"125px"}}>
        <div className="content">
				<div className="container">

					<div className="row">
						<div className="col-md-7 col-lg-8">
							<div className="card">
								<div className="card-body">
								
								
									<form action="payment-success.html">
									
									
										<div className="info-widget">
											<h4 className="card-title">Patient Details</h4>
                                            <h6>This in-clinic appointment is for:</h6>
                                            

                                            <div className="row">
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
                                                        <div className="form-control form-check">
                                                        <input className="form-check-input" style={{marginLeft: 0 }} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                        <label className="form-check-label" style={{marginLeft: "2rem"}} htmlFor="flexRadioDefault1">For You</label>
													    </div>
                                                    </div>
                                                </div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
                                                        <div className="form-control form-check">
                                                        <input className="form-check-input" style={{marginLeft: 0 }} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" style={{marginLeft: "2rem"}} htmlFor="flexRadioDefault1">For Someone else</label>
													    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6>Please Provide the following information about John:</h6>
											<div className="row">
												<div className="col-md-12 col-sm-12">
													<div className="form-group card-label">
														<label>Full Name</label>
														<input className="form-control" type="text" />
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>Email</label>
														<input className="form-control" type="email" />
													</div>
												</div>
												<div className="col-md-6 col-sm-12">
													<div className="form-group card-label">
														<label>Phone</label>
														<input className="form-control" type="text" />
													</div>
												</div>
											</div>
											<div className="exist-customer">Existing Customer? <a href="#/">Click here to login</a></div>
										</div>
								
										
										<div className="payment-widget">
											<h4 className="card-title">Payment Method</h4>
											
										
											<div className="payment-list">
												<label className="payment-radio credit-card-option">
													<input type="radio" name="radio" checked />
													<span className="checkmark"></span>
													Credit card
												</label>
												<div className="row">
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="card_name">Name on Card</label>
															<input className="form-control" id="card_name" type="text" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group card-label">
															<label htmlFor="card_number">Card Number</label>
															<input className="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_month">Expiry Month</label>
															<input className="form-control" id="expiry_month" placeholder="MM" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="expiry_year">Expiry Year</label>
															<input className="form-control" id="expiry_year" placeholder="YY" type="text" />
														</div>
													</div>
													<div className="col-md-4">
														<div className="form-group card-label">
															<label htmlFor="cvv">CVV</label>
															<input className="form-control" id="cvv" type="text" />
														</div>
													</div>
												</div>
											</div>
                                            <br/>
											<div className="payment-list">
												<label className="payment-radio paypal-option">
													<input type="radio" name="radio" />
													<span className="checkmark"></span>
													Paypal
												</label>
											</div>
										
											<div className="payment-list">
												<label className="payment-radio paypal-option">
													<input type="radio" name="radio" />
													<span className="checkmark"></span>
													Pay later at the clinic
												</label>
											</div>
									
											<div className="terms-accept">
												<div className="custom-checkbox">
												   <input type="checkbox" id="terms_accept" />
												   <label htmlFor="terms_accept">&nbsp; I have read and accept <a href="#/">Terms &amp; Conditions</a></label>
												</div>
											</div>
									
											<div className="submit-section mt-4">
                                            <Link to="/success"><button type="submit" className="btn btn-primary submit-btn">
                                            Confirm and Pay
                                                </button></Link>
											</div>
									
											
										</div>
									</form>
					
									
								</div>
							</div>
							
						</div>
						
						<div className="col-md-5 col-lg-4 theiaStickySidebar">
						
						
							<div className="card booking-card">
								<div className="card-header">
									<h4 className="card-title">Booking Summary</h4>
								</div>
								<div className="card-body">
								
							
									<div className="booking-doc-info">
										<a href="doctor-profile.html" className="booking-doc-img" >
											<img src={doc} alt="UserImage" />
										</a>
										<div className="booking-info">
											<h4><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
											<div className="rating">
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star filled"></i>
												<i className="fas fa-star"></i>
												<span className="d-inline-block average-rating">35</span>
											</div>
											<div className="clinic-details">
												<p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
											</div>
										</div>
									</div>
							
									
									<div className="booking-summary">
										<div className="booking-item-wrap">
											<ul className="booking-date">
												<li>Date <span>16 Nov 2019</span></li>
												<li>Time <span>10:00 AM</span></li>
											</ul>
											<ul className="booking-fee">
												<li>Consulting Fee <span>$100</span></li>
												<li>Booking Fee <span>$10</span></li>
												<li>Video Call <span>$50</span></li>
											</ul>
											<div className="booking-total">
												<ul className="booking-total-list">
													<li>
														<span>Total</span>
														<span className="total-cost">$160</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						
							
						</div>
					</div>

				</div>

			</div>
        </div>
        </>
    )
}
