import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
`;

const Image = ({ className, url }) => {
    return (
        <StyledImage className={className} src={url} />
    );
}

Image.propTypes = {
    className: propTypes.string,
    url: propTypes.string.isRequired,
}

export default Image;
