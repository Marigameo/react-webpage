import React from 'react'
import './PopC.css'
import { Link } from 'react-router-dom';
import { DiagPop } from '../../DiagData/Icons/DiagPop';

function PopC() {
    return (
        <div className="popper-box">
					
        {DiagPop.map((item, index) => {
            return(
            <div className="popc">
                <Link to='/pop-test'>
                <div className="pop-box">
                    <div className='popper-design' key={item.id}>
                    <img width={64} height={64} src={item.img} alt=""/>
                    <h5>{item.text}</h5>
                    </div>
                </div>
                </Link>
            </div>
            )
        })}
    </div>
    )
}

export default PopC
