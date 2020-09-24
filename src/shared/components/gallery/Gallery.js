import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
    max-width: 800px;
    margin: auto;
    margin-top: 1em;
`;

const StyledGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(${props => props.maxWidth || 200}px, 1fr));
    grid-gap: 15px;
`;

const Gallery = ({ children, maxWidth }) => {
    return (
        <StyledContainer>
            <StyledGallery maxWidth={maxWidth}>
                {children}
            </StyledGallery>
        </StyledContainer>
    );
}

Gallery.propTypes = {
    children: propTypes.node.isRequired,
    maxWidth: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

export default Gallery;
