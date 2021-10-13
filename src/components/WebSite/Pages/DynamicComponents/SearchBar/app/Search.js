import React from 'react'
import DoctorSearch from './DoctorSearch'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
  }
  
  componentDidMount() {
    this.getGeoLocation()
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        console.log('latlong', latitude, longitude)
        this.getApproxAddress(latitude, longitude)
      })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getApproxAddress = async (lat, long) => {
    return await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=street_address|political|locality|sublocality|neighborhood|premise|subpremise&key=AIzaSyCvxiUM4shn9Zd3WzBQUVbxpQhLeMgA6BE&libraries=places`
    )
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Map Response: ', data)
        if (data.status === 'OK' && data.results.length > 0) {
          return data.results[0]
        }
   
        return null
        
      })
  }

  handleChange = address => {
    console.log('address', address)
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <div className="search-box" style={{padding: "0"}}>
           
            <form className="form-design" action="assets/webpages/list.html">

            <div className='search-location'>
            <input  {...getInputProps({placeholder: 'Search Places ...', className: 'location-search-input',})}type="text" id="location" placeholder="Search Location"/>                
              <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                      const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                      ? { backgroundColor: 'rgba(238, 238, 232, .9)',padding: ".5rem",  cursor: 'pointer' }
                      : { backgroundColor: '#fdfdfd',padding: ".5rem", cursor: 'pointer' };
                      return (
                      <div
                          {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                          })}
                      >
                        <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                  </div>
            </div>

            <div className="search-info">
              <DoctorSearch/>
            </div>
          
            </form>
          </div>
        </div>
        )}
      </PlacesAutocomplete>
    );
   
  }
} export default Search;