import React from "react";
import propTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1.4em 1.25em;
  color: black;
  text-align: center;
  text-decoration: none;
  ${props => props.isselected === "true" && css`
    background-color: ${props => props.theme.colours.action500};
    color: white;
    &:hover {
      background: ${props => props.theme.colours.action600};
    }
  `}
`;

const NavItem = ({ children, isSelected, setHover = () => {}, url }) => {
  return (
    <StyledLink 
      isselected={`${isSelected}`} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} 
      to={url}>
      {children}
    </StyledLink>
  );
};

NavItem.propTypes = {
  children: propTypes.node.isRequired,
  isSelected: propTypes.bool,
  setHover: propTypes.func,
  url: propTypes.string.isRequired,
};

export default NavItem;
