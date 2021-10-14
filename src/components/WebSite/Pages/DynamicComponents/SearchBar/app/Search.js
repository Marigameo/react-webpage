import React from 'react'
import DoctorSearch from './DoctorSearch'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      currentLocation: null,
      initialSuggestions: [],
      latitude: null,
      longitude: null,
      isChanged: false,
    };
  }
  
  componentDidMount() {
    this.getGeoLocation()
  }

  getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        console.log('latlong', latitude, longitude)
        this.setState({latitude: latitude, longitude: longitude})
        this.currentLocation = this.getApproxAddress(latitude, longitude)
      })
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  setCurrentLocation = (data) => {
    this.currentLocation = data
    this.setState({address: data.address_components[0].long_name})
  }

  getApproxAddress = async (lat, long) => {
    return await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=street_address|political|locality|sublocality|neighborhood|premise|subpremise&key=AIzaSyBgZl9hJTsIqoYnfZmmFDi6oKqg3QNYN5s&libraries=places`
    )
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Map Response: ', data)
        if (data.status === 'OK' && data.results.length > 0) {
          this.setCurrentLocation(data.results[0])
        }
   
        return null
        
      })
  }
  getNearbyPlaces = async () => {
    this.setState({isChanged: false})
    const {latitude, longitude} = this.state
    console.log(latitude, longitude)
    const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
      latitude
    },${longitude}&type=bus_station|post_office|tourist_attraction|train_station|hospital&radius=${5000 *
      1000}&key=AIzaSyBgZl9hJTsIqoYnfZmmFDi6oKqg3QNYN5s`;
    axios
      .get(URL)
      .then(response => {
        console.log(response.data.results);
        this.formatSuggestions(response.data.results)
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  formatSuggestions = (results) => {
    const formattedResults = results 
    .map(function(k) {
      return {
        description: k.name,
        id: k.place_id,
        types: ["locality", "political", "geocode"],
        formattedSuggestion: {mainText: k.name, secondaryText: k.vicinity}
      }
    })
    console.log('formattedResults', formattedResults)
    this.setState({initialSuggestions: formattedResults})
  }

  handleChange = address => {
    this.setState({isChanged: true})
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  fetchSuggestions = () => {
    console.log('fetching suggestions')
    this.getNearbyPlaces()
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          console.log('suggesstions', suggestions)
          const iterableSuggestion = this.state.isChanged ? suggestions : this.state.initialSuggestions
          return(
            <div>
            <div className="search-box" style={{padding: "0"}}>
           
            <form className="form-design" action="assets/webpages/list.html">

            <div className='search-location'>
            <input  {...getInputProps({placeholder: 'Search Places ...', className: 'location-search-input',})}type="text" id="location" placeholder="Search Location" onFocus={this.fetchSuggestions}/>                
              <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {iterableSuggestion.map(suggestion => {
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
          )
        }
         
        }
      </PlacesAutocomplete>
    );
   
  }
} export default Search;