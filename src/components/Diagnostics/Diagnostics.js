import React from 'react';
import './Diagnostics.css'
import SimpleSlider from './caroussel';
import '../../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

//images
import iconOne from "../../components/assets/img/specialities/svg/1.svg";
import iconTwo from "../../components/assets/img/specialities/svg/2.svg";
import iconThree from "../../components/assets/img/specialities/svg/3.svg";
import blogOne from "../../components/assets/img/blog/blog-01.jpg"
import blogTwo from "../../components/assets/img/blog/blog-02.jpg"
import blogThree from "../../components/assets/img/blog/blog-03.jpg"
import specialityIcon from '../../components/assets/img/specialities/specialities-01.png'
import topOne from "../../components/assets/img/specialities/specialities-01.png"
import { Link } from 'react-router-dom';
import Search from '../DynamicComponents/SearchBar/app/Search';
import pOne from '../../components/assets/img/popular-categories/01.png'
import pTwo from '../../components/assets/img/popular-categories/02.png'
import pThree from '../../components/assets/img/popular-categories/03.png'
import pFour from '../../components/assets/img/popular-categories/04.png'
import pFive from '../../components/assets/img/popular-categories/05.png'
import pSix from '../../components/assets/img/popular-categories/06.png'
import tOne from '../../components/assets/img/top-rated/01.png'
import tTwo from '../../components/assets/img/top-rated/02.png'
import tThree from '../../components/assets/img/top-rated/03.png'
import tFour from '../../components/assets/img/top-rated/04.png'
import tFive from '../../components/assets/img/top-rated/05.png'
import tSix from '../../components/assets/img/top-rated/06.png'
import tSeven from '../../components/assets/img/top-rated/07.png'
import tEight from '../../components/assets/img/top-rated/08.png'
import tNine from '../../components/assets/img/top-rated/09.png'

const Diagnostics = () => {
	return ( 
		<>
		<section style={{padding: '8rem 14rem 1rem 14rem'}}><Search/></section>
  		  <SimpleSlider/>
		  <section className="work-section" id="view-btn">
		  <div className=" text-center container">
			<h2>Medatu offers the facility of Home Sample Collection. You just need to follow some simple steps to book a home collection visit.</h2>
			<div className="row">
			<div className="col-lg-4">
					<img src={iconOne} alt=""/>
					<h6> To book a home visit, simply add your convenient time and location. Our certified professional from Medatu will be at your doorstep.</h6>
				</div>
			<div className="col-lg-4">
					<img src={iconThree} alt=""/>
					<h6> Our certified professionals will treat you with utmost safety and follow strict hygiene protocols while collecting samples from you.</h6>
				</div>
				<div className="col-lg-4">
					<img src={iconTwo} alt=""/>
					<h6>Get your Lab Reports online withing 24 hours.</h6>
				</div>

			</div>
		  </div>
		  </section>

			<section id="aff-blogs" className="section section-blogs">
				<article id="view-btn">
				<div className="container">
					<div className="section-header text-center">
						<h2>Affordable health Packages</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
					<div>
					<div style={{marginTop: "2rem"}} className="row blog-grid-row">
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogOne} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogTwo} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogThree} alt="Poster"/></a>
							</div>
						</div>
					</div>
					</div>
					</div>
					<button className="btn view-btn">View More</button>
				</article>
			</section>

           
			<section id="view-btn" >
				<div id="browse-section">
				<div className="container">
					<div className="section-header text-center">
						<h2>Popular Categories</h2><br/><br/>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pOne} alt=""/>
									</div>
									<h4>COVID-19</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pTwo} alt=""/>
									</div>
									<h4>Full Body Checkup</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pThree} alt=""/>
									</div>
									<h4>Fever</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pFour} alt=""/>
									</div>
									<h4>Diabetes</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pFive} alt=""/>
									</div>
									<h4>COVID-19</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={pSix} alt=""/>
									</div>
									<h4>Full Body Checkup</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Fever</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<div className="brower-box">
								<div>
									<div className="brower-img">
										<img src={specialityIcon} alt=""/>
									</div>
									<h4>Diabetes</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
				<button className="btn view-btn">View More</button>
			</section>
	
	<section id="top-tests">
	<article id="view-btn">
		<div className="section-header text-center">
			<h2>Top Rated-tests</h2>
		</div>
		<article className="top-test-sec">
			<div className="container">
				<div className="row">

					<div className="col-lg-4" id="top-test-col">
						<div className="top-test">
							<Link to='/test-detail'>
							<div className="top-test-1">
								<img className="top-test-img" src={tOne} alt=""/>
								<h4><br/>Blood typing</h4>
							</div>
							</Link>
						</div>
						</div>
					
					<div className="col-lg-4" id="top-test-col">
						<div className="top-test">
							<div className="top-test-1">
								<img className="top-test-img" src={tTwo} alt=""/>
								<h4>Cholesterol testing or lipid panel</h4>
							</div>
						</div>	
					</div>

					<div className="col-lg-4" id="top-test-col">
					<div className="top-test">
						<div className="top-test-1">
							<img className="top-test-img" src={tThree} alt=""/>
							<h4>Complete Blood Count</h4>
						</div>
					</div>
					</div>

					<div className="col-lg-4" id="top-test-col">
						<div className="top-test">
							<Link to='/top-blog'>
							<div className="top-test-1">
								<img className="top-test-img" src={tFour} alt=""/>
								<h4>Covid 19</h4>
							</div>
							</Link>
						</div>
						</div>
					
					<div className="col-lg-4" id="top-test-col">
						<div className="top-test">
							<div className="top-test-1">
								<img className="top-test-img" src={tFive} alt=""/>
								<h4><br/>Covid 19</h4>
							</div>
						</div>	
					</div>

					<div className="col-lg-4" id="top-test-col">
					<div className="top-test">
						<div className="top-test-1">
							<img className="top-test-img" src={tSix} alt=""/>
							<h4>Kidney function test</h4>
						</div>
					</div>
					</div>

					<div className="col-lg-4" id="top-test-col">
					<div className="top-test">
						<div className="top-test-1">
							<img className="top-test-img" src={tSeven} alt=""/>
							<h4>Liver function test</h4>
						</div>
					</div>
					</div>

					<div className="col-lg-4" id="top-test-col">
					<div className="top-test">
						<div className="top-test-1">
							<img className="top-test-img" src={tEight} alt=""/>
							<h4>Pregnancy test</h4>
						</div>
					</div>
					</div>

					<div className="col-lg-4" id="top-test-col">
					<div className="top-test">
						<div className="top-test-1">
							<img className="top-test-img" src={tNine} alt=""/>
							<h4>TIBC</h4>
						</div>
					</div>
					</div>

				</div>
			</div>
		</article>
		<button className="btn view-btn">View More</button>
	</article>
	</section>

			<section id="view-btn" className="section section-blogs">
				
				<div className="container">

					<div className="section-header text-center">
						<h2>Featured Labs</h2>
						<p className="sub-title">Every time you book a test with Medatu, we connect you with the most leading and certified labs located near you.</p>
					</div>
			
					<div>
					<div style={{marginTop: "2rem"}} className="row blog-grid-row">
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogOne} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogTwo} alt="Poster"/></a>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 col-sm-12">
							<div className="blog-image">
								<a href="blog-details.html"><img className="img-fluid" src={blogThree} alt="Poster"/></a>
							</div>
						</div>
					</div>
					</div>
					</div>
			
					<button className="btn view-btn">View More</button>
				
			</section>
</>
	 );
}
 
export default Diagnostics;

   