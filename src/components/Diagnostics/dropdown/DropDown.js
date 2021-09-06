import {Dropdown} from 'react-bootstrap/'
import {Link} from "react-router-dom";

const DropDown = () => {
  return ( 
    <Dropdown>
    <Dropdown.Toggle id='diag-search'>
     Search for Tests and Profiles
    </Dropdown.Toggle>
  
    <Dropdown.Menu id="d-menu">
    
      <Dropdown.Item id='d-item'><Link as={Link} to="/pharmacy-search">Test</Link></Dropdown.Item>
      <Dropdown.Item id='d-item'><Link as={Link} to="/pharmacy-search">Pregnancy Test</Link> </Dropdown.Item>
      <Dropdown.Item id='d-item'><Link as={Link} to="/pharmacy-search">T3 T4 TSH </Link></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
   );
}
 
export default DropDown;