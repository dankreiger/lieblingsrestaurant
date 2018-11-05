import React, { useState } from 'react';
import {
  Badge,
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
import { InfoLink } from './Navigation.styles';

const Navigation = ({ favorites }) => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <Navbar color="light" light expand="md">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <NavbarToggler onClick={() => toggleMenu(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <InfoLink
              className={classNames('nav-link', { show: favorites.length })}
              to="/info"
            >
              Link To Info Page:{' '}
              <Badge>{pluralize('favorite', favorites)}</Badge>
            </InfoLink>
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
