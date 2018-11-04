import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={() => toggleMenu(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/info">
              Info
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
