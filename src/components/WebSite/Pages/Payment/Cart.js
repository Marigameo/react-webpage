import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import fOne from '../../../assets/img/features/feature-01.jpg'
import fTwo from '../../../assets/img/features/feature-02.jpg'
import fThree from '../../../assets/img/features/feature-03.jpg'
import fFour from '../../../assets/img/features/feature-04.jpg'
import fFive from '../../../assets/img/features/feature-05.jpg'
export default function Cart() {
	useEffect(() => {
        window.scroll(0,0)
    }, )
    return (
       <>
          <div className="sectioncolor"  style={{paddingTop:"175px"}}>
	<div className="content">
				<div className="container">			
					
					<div className="card card-table">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-hover table-center mb-0">
									<thead>
										<tr>
											<th>Product</th>
											<th>SKU</th>
											<th>Price</th>
											<th className="text-center">Quantity</th>
											<th className="text-center">Total</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="product-description.html" className="avatar avatar-sm mr-2"><img className="avatar-img" src={fOne} alt="UserImage"/></a>
												</h2>
												<a href="product-description.html">Benzaxapine Croplex</a>
											</td>
											<td>26565</td>
											<td>$19</td>					
											<td className="text-center">
											<div className="custom-increment cart">
			                                    <div className="input-group1">
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i className="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity1" name="quantity1" className=" input-number" value="10" />
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i className="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td className="text-center">$19</td>
											<td className="text-right">
												<div className="table-action">
													<a href="#/" className="btn btn-sm bg-danger-light">
														<i className="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="product-description.html" className="avatar avatar-sm mr-2"><img className="avatar-img" src={fTwo} alt="UserImage"/></a>
												</h2>
												<a href="product-description.html">Ombinazol Bonibamol</a>
											</td>
											<td>865727</td>
											<td>$22</td>					
											<td className="text-center">
											<div className="custom-increment cart">
			                                    <div className="input-group1">
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i className="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity2" name="quantity2" className=" input-number" value="10" />
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i className="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td className="text-center">$22</td>
											<td className="text-right">
												<div className="table-action">
													<a href="#/" className="btn btn-sm bg-danger-light">
														<i className="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="product-description.html" className="avatar avatar-sm mr-2"><img className="avatar-img" src={fThree} alt="UserImage"/></a>
												</h2>
												<a href="product-description.html">Dantotate Dantodazole</a>
											</td>
											<td>978656</td>
											<td>$10</td>					
											<td className="text-center">
											<div className="custom-increment cart">
			                                    <div className="input-group1">
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i className="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity3" name="quantity3" className=" input-number" value="10" />
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i className="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td className="text-center">$10</td>
											<td className="text-right">
												<div className="table-action">
													<a href="#/" className="btn btn-sm bg-danger-light">
														<i className="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="product-description.html" className="avatar avatar-sm mr-2"><img className="avatar-img" src={fFour} alt="UserImage"/></a>
												</h2>
												<a href="product-description.html">Alispirox Aerorenone</a>
											</td>
											<td>543252</td>
											<td>$26</td>					
											<td className="text-center">
											<div className="custom-increment cart">
			                                    <div className="input-group1">
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i className="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity4" name="quantity4" className=" input-number" value="10" />
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i className="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td className="text-center">$26</td>
											<td className="text-right">
												<div className="table-action">
													<a href="#/" className="btn btn-sm bg-danger-light">
														<i className="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<h2 className="table-avatar">
													<a href="product-description.html" className="avatar avatar-sm mr-2"><img className="avatar-img" src={fFive} alt="UserImage"/></a>
												</h2>
												<a href="product-description.html">Nitrolozin Zithrotropin</a>
											</td>
											<td>634534</td>
											<td>$12</td>					
											<td className="text-center">
											<div className="custom-increment cart">
			                                    <div className="input-group1">
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i className="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity5" name="quantity5" className=" input-number" value="10" />
				                                    <span className="input-group-btn">
				                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i className="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td className="text-center">$12</td>
											<td className="text-right">
												<div className="table-action">
													<a href="#/" className="btn btn-sm bg-danger-light">
														<i className="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>		
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-7 col-lg-8">
						</div>
						
						<div className="col-md-5 col-lg-4">
						
							
							<div className="card booking-card">
								<div className="card-header">
									<h4 className="card-title">Cart Totals</h4>
								</div>
								<div className="card-body">
									
									<div className="booking-summary">
										<div className="booking-item-wrap">
											<ul className="booking-date">
												<li>Subtotal <span>$5,877.00</span></li>
												<li>Shipping <span>$25.00<a href="#/">Calculate shipping</a></span></li>
											</ul>
											<ul className="booking-fee pt-4">
												<li>Tax <span>$0.00</span></li>
											</ul>
											<div className="booking-total">
												<ul className="booking-total-list">
													<li>
														<span>Total</span>
														<span className="total-cost">$160</span>
													</li>
													<li>
														<div className="clinic-booking pt-4">
															<Link className="apt-btn" to="/payment">Proceed to checkout</Link>
														</div>
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
