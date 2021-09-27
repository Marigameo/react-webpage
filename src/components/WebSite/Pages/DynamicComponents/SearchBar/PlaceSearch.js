import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Symptoms from './app/DoctorSearch';
 
class Placesapi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
  }
  
  handleChange = address => {
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
                <div className="form-group search-location">


                    <input  {...getInputProps({placeholder: 'Search Places ..', className: 'location-search-input',})}type="text" className="form-control" id="location" placeholder="Search Location"/>
                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                            ? { backgroundColor: 'rgba(238, 238, 232)',padding: ".5rem",  cursor: 'pointer' }
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
                <div className="form-group search-info">
                <Symptoms className="form-control"/>
              
                </div>
                <button id="search-btn" type="submit" className="btn btn-primary search-btn mt-0"><FontAwesomeIcon icon={faSearch}/><span>Search</span></button>
            </form>
        </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
   
  }
} export default Placesapi;