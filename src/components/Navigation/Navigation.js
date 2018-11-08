import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { pluralize } from './../../utils/functions';
import { InfoLink, InfoLinkButton } from './Navigation.styles';

const Navigation = ({ favorites }) => {
  const [isOpen, toggleMenu] = useState(false);

  const resetApp = () => {
    localStorage.removeItem('state');
    return (window.location.href = '/');
  };
  return (
    <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <NavbarToggler onClick={() => toggleMenu(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <InfoLinkButton
              color="info"
              className={classNames({ show: favorites.length > 0 })}
            >
              <InfoLink to="/info">{pluralize('favorite', favorites)}</InfoLink>
            </InfoLinkButton>
          </NavItem>
          <NavItem>
            <Button onClick={() => resetApp()} color="danger">
              Reset All
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  null
)(Navigation);
