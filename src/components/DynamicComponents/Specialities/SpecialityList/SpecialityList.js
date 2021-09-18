import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SpecialityDataTwo } from './Data/SpecialityDataTwo';

const checker = [
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    text: `lorem ipsum loremkjhi iuhiuhi`
  }
]

const SpecialityList = () => {
  return (
    
		<div className="main-wrapper">

    <Breadcrumb style={{paddingTop: '100px'}}/>
    
    <div className="content">
      <div className="container-fluid">

        <div className="row sidebar">
          <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
            
            <div className="card search-filter">
              <div className="card-header">
                <h4 className="card-title mb-0">Filter</h4>
              </div>
              <div className="card-body">
            
              <div className="filter-widget">
                <h4>Categories</h4>
                <div>
                {checker.map((item, index) => {
                  return(
                  <label className="custom_check">
                    <input type="checkbox" name="gender_type" / >
                    <span className="checkmark"></span>{item.text}
                  </label>
                  )
                })}     
                </div>
             
                <div className="btn-search">
                  <button type="button" className="btn btn-block">Search</button>
                </div>	
              </div>
            </div>
            </div>
          </div>
          
          <div className="col-md-7 col-lg-9 col-xl-9">

            <div className="row align-items-center pb-3">	
              <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
                <h3 className="title pharmacy-title">Medlife Medical</h3>
                <p className="doc-location mb-2 text-ellipse pharmacy-location"><i className="fas fa-map-marker-alt mr-1"></i> 96 Red Hawk Road Cyrus, MN 56323 </p>
                <span className="sort-title">Showing 6 of 98 products</span>
              </div>

              <div className="col-md-8 col-12 d-md-block d-none custom-short-by">
                <div className="sort-by pb-3">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="select">
                      <option>Select</option>
                      <option className="sorting">Rating</option>
                      <option className="sorting">Popular</option>
                      <option className="sorting">Latest</option>
                      <option className="sorting">Free</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>

<article id='view-btn'>
<div className="row">
            {SpecialityDataTwo.map((item, index) => {
              return(
                
        <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
        <Link to='doctors'>
                <div className="profile-widget">
                  <div className="doc-img">
                    <a href="#/" tabIndex="-1">
                      <img className="img-fluid" alt="ProductImage" src={item.img} width={60}/>
                    </a>
                    <a href="#/" className="fav-btn" tabIndex="-1">
                      <i className="far fa-bookmark"></i>
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title pb-4">
                      <a href="#/" tabIndex="-1">Benzaxapine Croplex</a> 
                    </h3>
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <span className="price">$19.00</span>
                        <span className="price-strike">$45.00</span>
                      </div>
                      <div className="col-lg-6 text-right">
                        <a href="#/" className="cart-icon"><FontAwesomeIcon icon={faShoppingCart}/></a>
                      </div>
                    </div>
                  </div>
                </div>	
                </Link>	
                </div>
               
              )
            })}
          </div>
          <button className="btn view-btn">View More</button>
</article>
            
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default SpecialityList;