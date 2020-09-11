import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledItem = styled.li`
  float: left;
`;

//#ff4c00
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 18px 15px;
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

const NavItem = ({children, className, isSelected, setHover = () => {}, url}) => {
  return (
    <StyledItem 
      className={className} 
      isSelected={isSelected} 
      onClick={() => {}} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <StyledLink isselected={`${isSelected}`} to={url}>
        {children}
      </StyledLink>
    </StyledItem>
  );
};

NavItem.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  isSelected: propTypes.bool,
  setHover: propTypes.func,
  url: propTypes.string.isRequired,
};

export default NavItem;
