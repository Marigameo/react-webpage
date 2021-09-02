import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../components/assets/style.css'
import '../../node_modules/swiper/swiper-bundle.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/umd/popper.min';
import 'jquery/dist/jquery.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';


//images 
import logo from "../components/assets/img/logo.png"

import Home from './Home/Home';
import Maternity from './Maternity/Maternity';
import Diagnostics from './Diagnostics/Diagnostics';

// import About from './About'
import HomeCare from './HomeCare/HomeCare';
import AboutUs from './AboutUs/AboutUs';
import Blog1 from './Blogs/BlogPage'
import Blog2 from './Blogs/BlogPageTwo'

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                

<header className="header header-trans">
    <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
            <a id="mobile_btn" href="#/">
                <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
            <Nav.Link as={Link} to="/">
            {/* <a href="#/" className="navbar-br/and logo"> */}
              <img src={logo} className="img-fluid" alt="Logo"/>
            {/* </a> */}
            </Nav.Link>
        </div>
        <div className="main-menu-wrapper">
            <div className="menu-header">
                <a href="#/" className="menu-logo">
                    <img src={logo} className="img-fluid" alt="Logo"/>
                </a>
                <a id="menu_close" className="menu-close" href="#/">
                    <FontAwesomeIcon icon={faTimes} />
                </a>
            </div>
            <ul className="main-nav" >
                
                <li className="has-submenu">
                <Nav.Link as={Link} to="/home-care">Home Care</Nav.Link>
                </li>
                <li className="has-submenu">
                <Nav.Link as={Link} to="/diagnostics">Diagnostics</Nav.Link>
                </li>
                <li className="has-submenu">
                    <a href="#/">Pharmacy</a>
                </li>
                <li className="has-submenu">
                <Nav.Link as={Link} to="/about">For Women</Nav.Link>
                </li>
                <li className="has-submenu">
                    <a href="#/">More&nbsp;<FontAwesomeIcon icon={faChevronDown}/></a>  
                    <ul className="submenu">
                        <li><a href="#/">Hospitals</a></li>
                        <li><a href="#/">Health Insurance</a></li>
                        <li><a href="#/">Medical Tourism</a></li>
                    </ul>
                </li>
                
            </ul>		 
        </div>		 
        <ul className="nav header-navbar-rht">
            <li className="nav-item contact-item">
            </li>
            <li className="nav-item">
                <a className="nav-link header-login" href="#/">login / Signup </a>
            </li>
        </ul>
    </nav>
</header>

<Switch>
<Route path="/home-care">
        <HomeCare/>
    </Route>
<Route path="/blog">
        <Blog1 />
    </Route>
    <Route path="/blog2">
        <Blog2 />
    </Route>
    <Route path="/maternity">
        <Maternity />
    </Route>
    <Route path="/diagnostics">
        <Diagnostics />
    </Route>
    <Route path="/about">
        <AboutUs/>
    </Route>
    <Route path="/">
        <Home />
    </Route>
</Switch>

</Router>
        )
    }
}
