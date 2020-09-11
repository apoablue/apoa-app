import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledGallery = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    height: ${props => props.height ? `${props.height}px` : "100%"};
    max-width: ${props => props.height ? `${props.height * 1.5}px` : "90vw"};
    margin: auto;
    padding: 10px 0 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
`;

const StyledHeightCalculator = styled.div`
    visibility: hidden;
    height: 100%;
    z-index: -1;
`;

const Gallery = ({ children, className, fillMaxHeight }) => {
    const wrapperRef = useRef(null);
    const [height, setHeight] = useState();

    useEffect(() => {
        const updateHeight = () => {
            if (wrapperRef.current) {
                setHeight(0);
                setHeight(wrapperRef.current.offsetHeight);
            }
        };
        if (fillMaxHeight) {
            updateHeight();
            window.addEventListener('resize', updateHeight);    
        }        
        return () => window.removeEventListener('resize', updateHeight);
    }, [fillMaxHeight]);

    return (
        <>
            {fillMaxHeight && <StyledHeightCalculator ref={wrapperRef} />}
            <StyledGallery className={className} height={height}>
                {children}
            </StyledGallery>
        </>
    );
}

Gallery.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    fillMaxHeight: propTypes.bool,
};

export default Gallery;
