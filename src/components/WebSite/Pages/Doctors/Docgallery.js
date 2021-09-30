import React, {useEffect, useState} from 'react'

function Docgallery() {
    const [ doctors, setDoctor ] = useState([]);

	useEffect(() => {
        async function fetchData() {

			const requestOptions = {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  },
				body: JSON.stringify({location: 'bangalore', longitude: 1, latitude: 1})
			};
			const response = await fetch('http://184.168.117.236/test/admin/api_doctor.php', requestOptions)
			const data = await response.json();
			setDoctor(data)
		 }
		  fetchData()  
		  window.scroll(0,0) 
    }, [])
    return (
     <article>
         <ul className="clinic-gallery">
            {doctors.map((item, index) => {
                 
                return(
                    <>
                    <li style={{marginRight : '.8rem'}}>
                    <a href={item.doctor_image} data-fancybox="gallery">
                    <img src={item.doctor_image} alt="Feature"/>
                    </a>
                    </li>  
                    </>
                )
            })}
              </ul>
</article>
    )
}

export default Docgallery
