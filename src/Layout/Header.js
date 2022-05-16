import React,{useState,useContext} from 'react'
import { Navbar, NavbarToggler, Nav, NavLink, NavItem, NavbarBrand, Collapse, NavbarText} from "reactstrap"
import { Link } from "react-router-dom"
import {UserContext} from "../Context/UserContext"


const Header = () => {
    const [open, setOpen]=useState(false);
    const userContext=useContext(UserContext);

    const toggle=()=>setOpen(!open);

    return (
        <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Git-Firebase App
        </Link>
      </NavbarBrand>
      <NavbarText className='text-white'>{userContext.user?.email? userContext.user.email:""}</NavbarText>
      <NavbarToggler onClick={toggle}/>

        <Collapse open={open} navbar>
            
        <Nav className='ms-auto' navbar>
            {
                userContext.user?(<><NavItem>
                    <NavLink onClick={()=>{
                      userContext.setUser(null);
                    }}>Logout</NavLink>
                  </NavItem></>):(<><NavItem>
                    <NavLink tag={Link} className="text-white" to="/signup">Signup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-white" to="/signin"> Signin </NavLink>
                  </NavItem></>)
            } 
        </Nav>
        </Collapse>
    </Navbar>
    )
}

export default Header