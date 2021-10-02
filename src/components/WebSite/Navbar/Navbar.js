import React, {useState, useEffect} from "react";

import Home from '../Pages/Home/Home';
import PopTests from '../Pages/Diagnostics/PopTests/PopTests';
import Diagnostics from '../Pages/Diagnostics/Main/Diagnostics';
import HomeCare from '../Pages/HomeCare/HomeCare';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Blog1 from '../Pages/Blogs/BlogPage'
import Blog2 from '../Pages/Blogs/BlogPageTwo'
import FAQPage from '../Pages/FAQPage/FAQPage';
import Payment from '../Pages/Payment/Payment';
import PaymentSuccess from '../Pages/Payment/PaymentSuccess';
import PharmacySearch from '../Pages/Pharmacy/PharmacySearch';
import ProductDescription from '../Pages/Pharmacy/ProductDescription';
import Cart from '../Pages/Payment/Cart';
import ComingSoon from '../Pages/ComingSoon/ComingSoon'
import ForWoman from '../Pages/ForWoman/ForWoman';
import Invoice from '../Pages/Payment/Invoice'
import VirtualCare from '../Pages/VirtualCare/VirtualCare'
import SpecialityList from '../Pages/DynamicComponents/Specialities/SpecialityList/SpecialityList'
import TestDetails from '../Pages/Diagnostics/TestDetails/TestDetails';

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
import Footer from '../Pages/Footer';
import logo from "../../assets/img/logo.png"
import DocA from "../Pages/Doctors/Doctors/DocHome/DocA";
import RFooter from "../Pages/RFooter/RFooter";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
  return (
    <Router>
    <nav className='navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img src={logo} alt="logoimg" />
             </Link>
             <div className="menu-icon" onClick={handleClick}>
                 {click ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
             </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
        
        <li className='nav-item'><Link to='/home-care' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h6>Home Care</h6>
            <p>Doctor at Home</p>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/virtual-care' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h6>Virtual Care</h6>
            <p>Video Consultations</p>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/coming-soon' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h6>Pharmacy</h6>
            <p>medatu.shop</p>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/diagnostics' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>
            <h6>Diagnostics</h6>
            <p>Tests and Checkups</p>
        </div>
        </Link></li>

        <li className='nav-item'><Link to='/for-women' className='nav-links' onClick={closeMobileMenu}>
        <div className='nav-content'>  
            <h6>For Women</h6>
            <p>Complete Women care</p>
        </div> 
        </Link></li>
        
      </ul>
             {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
         </div>
     </nav>
   
  <Switch>
    <Route path='/doctors'><DocA/></Route>
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
    <Route path="/diagnostics"><Diagnostics /></Route>
    <Route path="/payment"><Payment/></Route>
    <Route path="/success"><PaymentSuccess/></Route>
    <Route path="/about"><AboutUs/></Route>
    <Route path="/"><Home /></Route>
</Switch>
<RFooter/>
<Footer/>

      </Router>
     );
}
 
export default Navbar;