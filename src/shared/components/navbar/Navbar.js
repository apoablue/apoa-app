import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { PAGE_NAME } from 'shared/constants/PageName';

import NavItem from './NavItem';

const StyledNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: .75em;
  overflow: hidden;
  background-color: #FFF;
  font-size: .8rem;
`;

const StyledName = styled(NavItem)`
	float: right;
  font-size: 1.25rem;
  font-weight: bold;
  a {
    padding: .6em .7em;
    border: .15em solid transparent;
    color: ${props => props.theme.colours.action500};
    text-decoration: none;
    &:hover {
      border-color: ${props => props.theme.colours.action600};
    }
  }
`;

const Navbar = ({ pageName }) => {
  const [selected, setSelected] = useState(pageName);

  const onHover = (val, navItem) => {
    if (val) {
      setSelected(navItem);
    } else {
      setSelected(pageName);
    }
  };

  return (
    <StyledNavbar>
      <NavItem 
        isSelected={selected === PAGE_NAME.WORK} 
        setHover={(val) => onHover(val, PAGE_NAME.WORK)}
        url="/">
        Work
      </NavItem>
      <NavItem 
        isSelected={selected === PAGE_NAME.ABOUT} 
        setHover={(val) => onHover(val, PAGE_NAME.ABOUT)}
        url="/about">
        About
      </NavItem>
      <StyledName url="/">Apoa Falby Clark</StyledName>
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  pageName: propTypes.number.isRequired,
};

export default Navbar;
