import { useState } from 'react';

import Home from '../Home/Home';
import PopTests from '../Diagnostics/PopTests/PopTests';
import Diagnostics from '../Diagnostics/Main/Diagnostics';
import HomeCare from '../HomeCare/HomeCare';
import AboutUs from '../AboutUs/AboutUs';
import Blog1 from '../Blogs/BlogPage'
import Blog2 from '../Blogs/BlogPageTwo'
import DocList from '../Doctors/DocList';
import FAQPage from '../FAQPage/FAQPage';
import DocDescription from '../Doctors/DocDescription';
import Payment from '../Payment/Payment';
import PaymentSuccess from '../Payment/PaymentSuccess';
import PharmacySearch from '../Pharmacy/PharmacySearch';
import ProductDescription from '../Pharmacy/ProductDescription';
import Cart from '../Payment/Cart';
import ComingSoon from '../ComingSoon/ComingSoon'
import ForWoman from '../ForWoman/ForWoman';
import Invoice from '../Payment/Invoice'
import VirtualCare from '../VirtualCare/VirtualCare'
import SpecialityList from '../DynamicComponents/Specialities/SpecialityList/SpecialityList'
import TestDetails from '../Diagnostics/TestDetails/TestDetails';

import { Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css'
import Footer from '../Footer';
import logo from "../assets/img/logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHamburger } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

    return ( 
      <Router>
      <div className="navbarz">
        
        <div className="leftz">
        <Nav.Link as={Link} to="/">
              <img src={logo} className="img-fluid" alt="Logo"/>
            </Nav.Link>
        </div>
        
        <div className="rightz">
          <div className="links" id={showLinks ? 'hidden' : ''}>
            <div className="main-navs">
              <Nav.Link as={Link} to='/home' id='links'><h2>DOCTORS</h2><p>In Clinic Appointment</p></Nav.Link>
              <Nav.Link as={Link} id='links' to='/virtual-care'><h2>VIRTUAL CARE</h2><p>Video Consultations</p></Nav.Link>
              <Nav.Link as={Link} id='links' to='/home-care'><h2>HOME CARE</h2><p>Doctor at Home</p></Nav.Link>
              <Nav.Link as={Link} id='links' to='/pharmacy'><h2>PHARMACY</h2><p>Buy Medicines Online</p></Nav.Link>
              <Nav.Link as={Link} id='links' to='/diagnostics'><h2>DIAGNOSTICS</h2><p>Test and Checkups</p></Nav.Link>
              <Nav.Link as={Link} id='links' to='/for-women'><h2>FOR WOMEN</h2><p>Complete Women care</p></Nav.Link>
            </div>
            <div className="sign-in">
            <Nav.Link as={Link} id='links' to='/contact' id='btn'>Sign In</Nav.Link>
            </div>
          </div>
          {/* <FontAwesomeIcon icon={faHamburger} onClick={() => setShowLinks(!showLinks)}/> */}
        </div>
      
      </div>
  <Switch>
    <Route path="/home-care"><HomeCare/></Route>
    <Route path='/faq'><FAQPage/></Route>
    <Route path='/pop-test'><PopTests/></Route>
    <Route path="/virtual-care"><VirtualCare/></Route>
    <Route path='/s-list'><SpecialityList/></Route>
    <Route path='/test-detail'><TestDetails/></Route>
    <Route path="/cart"><Cart/></Route>
    <Route path="/invoice"><Invoice/></Route>
    <Route path="/product-description"><ProductDescription/></Route>
    <Route path="/pharmacy-search"><PharmacySearch/></Route>
    <Route path="/coming-soon"><ComingSoon/></Route>
    <Route path="/for-women"><ForWoman/></Route>
    <Route path="/blog"><Blog1 /></Route>
    <Route path="/blog2"><Blog2 /></Route>
    <Route path="/doctors"><DocList/></Route>
    <Route path="/doctor"><DocDescription/></Route>
    <Route path="/diagnostics"><Diagnostics /></Route>
    <Route path="/payment"><Payment/></Route>
    <Route path="/success"><PaymentSuccess/></Route>
    <Route path="/about"><AboutUs/></Route>
    <Route path="/"><Home /></Route>
</Switch>
<Footer/>
      </Router>
     );
}
 
export default Navbar;