import React from "react";
import aHome from '../../../../assets/img/app/home.jpg';
import '../Appointment.css'

const Appointment = () => {
    return ( 
        <>
    <article className='a-banner'>
    
    <section className="a-img">
        <img src={aHome} alt="a-home" />
    </section>
    
    <section className='a-content'>
        <h2>Download Medatu App</h2>
        <aside className='con-content'>
        <p>Book an Appointment</p>
        
        <div className='input-num'>
        <input className='num-list' type="text" placeholder="Enter your number to join the list" />
        <button type="button" class="btn btn-success">Join</button>
        </div>

        </aside>
    </section>
    
    </article>
        </>
     );
}
 
export default Appointment;