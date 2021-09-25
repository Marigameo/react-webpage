import React, {useState, useEffect} from "react";

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css'
import Footer from '../Footer';
import logo from "../assets/img/logo.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const changeBackground = () => {
    if(window.scrollY >120) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <Router>
    <nav className={navbar ? 'navbar active' : 'navbar'}>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img src={logo} alt="logoimg" />
             </Link>
             <div className="menu-icon" onClick={handleClick}>
                 {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
             </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
        
        <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h5>Home Care</h5>
            <h6>Doctor at Home</h6>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/virtual-care' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h5>Virtual Care</h5>
            <h6>Video Consultations</h6>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/coming-soon' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h5>Pharmacy</h5>
            <h6>Buy Medicines Online</h6>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/diagnostics' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h5>Diagnostics</h5>
            <h6>Test and Checkups</h6>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/for-women' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>  
            <h5>For Women</h5>
            <h6>Complete Women care</h6>
        </div> 
        </Link></li>
        
      </ul>
             {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
         </div>
     </nav>
   
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