import React, {useEffect} from 'react';
import './Diagnostics.css'
import { DiagTop } from '../DiagData/Icons/DiagTop';
import { DiagPop } from '../DiagData/Icons/DiagPop';
import PosterCard from '../Poster/PosterCard';
import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

//images
import iconOne from "../../../../assets/img/specialities/svg/1.svg";
import iconTwo from "../../../../assets/img/specialities/svg/2.svg";
import iconThree from "../../../../assets/img/specialities/svg/3.svg";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Search from '../../DynamicComponents/SearchBar/app/Search';
import Carousel from '../Components/Carousel';
import Space from '../../DynamicComponents/Space/Space';


const Diagnostics = () => {
	useEffect(() => {
        window.scroll(0,0)
    }, )
	return ( 
		<>
		<Container>
			<Space/>
		<section style={{paddingTop: '2rem'}}><Search/></section>
  		<Carousel/>
		</Container>
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
					<PosterCard/>
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
					
								{DiagPop.map((item, index) => {
									return(
									<div className="col-lg-4 col-md-4">
										<Link to='/pop-test'>
										<div className="pop-box">
											<div className='popper-design' key={item.id}>
											<img width={64} height={64} src={item.img} alt=""/>
											<h4>{item.text}</h4>
										
											</div>
										</div>
										</Link>
									</div>
									)
								})}
					</div>
				</div>
				</div>
				<Link to='/pop-test'>
				<button className="btn view-btn">View More</button>
				</Link>
			</section>
	
	<section id="top-tests">
	<article id="view-btn">
		<div className="section-header text-center">
			<h2>Top Rated-tests</h2>
		</div>
		<article className="top-test-sec">
			<div className="container">
				<div className="row">
					{DiagTop.map(( item, index ) => {
						return(
							<div className="col-lg-4" id="top-test-col">
								<div className="top-test">
									<Link to='/test-detail'>
									<div className="top-test-1" key={item.id}>
										<img className="top-test-img" src={item.img} alt=""/>
										<h4>{item.text}</h4>
									</div>
									</Link>
								</div>
							</div>
						)
					})}
				
					
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
					<PosterCard/>
					</div>
					
				</div>
			
					<button className="btn view-btn">View More</button>
				
			</section>
</>
	 );
}
 
export default Diagnostics;

   