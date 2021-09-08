import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function PaymentSuccess() {
	useEffect(() => {
        window.scroll(0,0)
    }, )
    return (
        <>
        <div style={{padding:"125px"}}>
        <div class="content success-page-cont">
				<div class="container-fluid">
				
					<div class="row justify-content-center">
						<div class="col-lg-6">
						
						
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<FontAwesomeIcon icon={faCheck} id="check"/>
										<h3>Payment Successfully!</h3>
										<p class="mb-0">Product ID: 245468</p><br/>
										<Link to='/invoice'>
										<button type="button" class="btn btn-success">Check your Invoice</button>
										</Link>
									</div>
								</div>
							</div>
				
							
						</div>
					</div>
					
				</div>
			</div>	
        </div>
        </>
    )
}
