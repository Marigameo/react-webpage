import React from "react";
import '../../assets/style.css'
import {Link} from "react-router-dom";
import Docinfo from "./Docinfo";

const Doctors = () => {
    return (
    <section style={{padding: '2rem'}} id='view-btn'>
        <div className='doc-carousel'>
        <Docinfo/>
        </div>    
        <Link to="/doctors">
            <button className=" btn view-btn">View More</button>
        </Link>
    </section>
    );
};

export default Doctors;