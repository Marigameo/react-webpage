import { Posters } from './Posters';

const PosterCard = () => {
    return ( 
        <div style={{marginTop: "2rem"}} className="row blog-grid-row">
            {Posters.map((item, index) => {
                return(
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="blog-image">
                        <a href="blog-details.html"><img className="img-fluid" src={item.img} alt="Poster"/></a>
                    </div>
                </div>
                )
            })}
        </div>
     );
}
 
export default PosterCard;