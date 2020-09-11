import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Image } from 'shared/components/image';

const StyledGalleryItem = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;
`;

const GalleryItemOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: ${props => props.theme.colours[props.overlayColour] || props.theme.colours.action200};
    opacity: .85;
`;

const GalleryItemOverlayText = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: white;
`;

const GalleryItem = ({imageUrl, overlayColour, updateOverlayColour, text}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const onMouseLeave = () => {
        setShowOverlay(false);
        updateOverlayColour();
    }

    return (
        <StyledGalleryItem 
            onMouseEnter={() => setShowOverlay(true)} 
            onMouseLeave={onMouseLeave}>
            <Image url={imageUrl} />
            {showOverlay && (
                <GalleryItemOverlay overlayColour={overlayColour}>
                    <GalleryItemOverlayText>
                        {text}
                    </GalleryItemOverlayText>
                </GalleryItemOverlay>
            )}
        </StyledGalleryItem>
    );
}

GalleryItem.propTypes = {
    imageUrl: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
};

export default GalleryItem;
