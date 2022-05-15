import React from 'react'
import { Navbar, NavbarToggler, Nav, NavLink, NavItem, NavbarBrand, Collapse} from "reactstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Git-Firebase App
        </Link>
      </NavbarBrand>
      <NavbarToggler />
        <Collapse navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink className="text-white" to="/signout">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" to="/signin">Signin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white" to="/logout">Logout</NavLink>
          </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    )
}

export default Header