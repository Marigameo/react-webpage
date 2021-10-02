import React from 'react';
import './RFooter.css'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RFooter() {
    return (
        <main>
            
        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Dropdown Button
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Dropdown Button
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Dropdown Button
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown id='r-footer'>
            <Dropdown.Toggle id='r-btn'>
            Dropdown Button
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
                
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/about'>Lorem, ipsum.</Dropdown.Item>
            <Dropdown.Item as={Link} id='r-option' to='/'>Lorem, ipsum.</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        </main>
    )
}

export default RFooter
