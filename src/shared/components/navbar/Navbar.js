import React, { useState } from 'react';
import styled from 'styled-components';

import { PAGE_NAME } from 'shared/constants/PageName';

import NavItem from './NavItem';

const StyledNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 9px;
  overflow: hidden;
  background-color: #FFF;
  font-size: 12px;
`;

const StyledName = styled(NavItem)`
	float: right;
  font-size: 18px;
  font-weight: bold;
  a {
    padding: 11px 14px;
    border: 2px solid transparent;
    color: red;
    text-decoration: none;
    &:hover {
      border: 2px solid ${props => props.theme.colours.action600};
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
        isSelected={selected === PAGE_NAME.HOME} 
        setHover={(val) => onHover(val, PAGE_NAME.HOME)}
        url="/apoa-app">
        Home
      </NavItem>
      <NavItem 
        isSelected={selected === PAGE_NAME.PROJECTS} 
        setHover={(val) => onHover(val, PAGE_NAME.PROJECTS)}
        url="/apoa-app/projects">
        Projects
      </NavItem>
      <NavItem 
        isSelected={selected === PAGE_NAME.NEW} 
        setHover={(val) => onHover(val, PAGE_NAME.NEW)}
        url="/apoa-app/new">
        New
      </NavItem>
      <StyledName url="/apoa-app/about">Apoa Falby Clark</StyledName>
    </StyledNavbar>
  );
}

export default Navbar;
