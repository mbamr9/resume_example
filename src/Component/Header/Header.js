import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, FormControl, Navbar, NavDropdown ,Button, Nav, Form, NavbarBrand} from 'react-bootstrap';
import{Link, NavLink} from 'react-router-dom';
import { HomeRounded } from '@mui/icons-material';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import ResumeData from '../../Utiles/ResumeData';
import CustomButton from '../Button/Button';
import SendIcon from '@mui/icons-material/Send';
import './Header.css'
const Header = (props) => {


  const pathName = props?.location?.pathName;
    return (
        <Navbar sticky='top' bg="light" expand="lg" className='header'>
        <Nav.Link as={NavLink} to="/" className={'p-0 m-0'}>
          <NavbarBrand className="header_home"> 
           <HomeRounded />
          </NavbarBrand>
        </Nav.Link>
          

          <NavbarToggle/>

          <NavbarCollapse>

            <Nav className="header_left">

            {/* Resume Link */}
              <Nav.Link as={NavLink} to="/" className={pathName =="/" ? 'header_link_active' : 'header_link ' } >
              Resume
              </Nav.Link>
               

               {/* portfolio link */}
              <Nav.Link as={NavLink} to="/portfolio" 
              className={pathName =="/" ?
               'header_link_active' : 'header_link ' } >
              portfolio
              </Nav.Link>
            </Nav>

              <div className='header_right'>
                {Object.keys(ResumeData.socials).map((key)=>{
                  return <a key={key} href={ResumeData.socials[key].link} rel="noreferrer" target="_blank"> {ResumeData.socials[key].icon}</a>
                })}
                <CustomButton  text='Hire Me' icon={<SendIcon/>}/>
              </div>
              
          </NavbarCollapse>

      </Navbar>
    )
}

export default Header
