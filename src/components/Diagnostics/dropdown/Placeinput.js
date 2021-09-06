import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
import {Dropdown} from 'react-bootstrap/'
import {Link} from "react-router-dom";
class PlacesInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { address: '',
    user: null
  };
   
  }
  
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users").then((resp) => {
    resp.json().then((result) => {
      console.log("result",result)
      this.setState({user:result.data})
    })
  })
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

            <div className='search-location'>
            <input 
            {...getInputProps({placeholder: 'Search Places ...', className: 'location-search-input',})}
            type="text"  placeholder="Search Location"/>    
            </div>

            <div className="search-info">
              
  <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:"#fff",color: "black",height: "45px"}} id="dropdown-basic">
   Search for Doctors or Symptoms
  </Dropdown.Toggle>

  <Dropdown.Menu>
  
    <Dropdown.Item ><Link as={Link} to="/pharmacy-search">Test</Link></Dropdown.Item>
    <Dropdown.Item ><Link as={Link} to="/pharmacy-search">Pregnancy Test</Link> </Dropdown.Item>
    <Dropdown.Item ><Link as={Link} to="/pharmacy-search">T3 T4 TSH </Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
          
            </form>

            <p style={{color:"black"}}>
              {
                this.state.user ?
                this.state.user.map((item,i)=>
                <div>
                <p>
                  {i}
                  
                  {item.title}
                  
                  </p>
                  </div>
                  ) 
                  : null
              }
            </p>
          </div>
        </div>
        )}
      </PlacesAutocomplete>
    );
   
  }
} export default PlacesInput;