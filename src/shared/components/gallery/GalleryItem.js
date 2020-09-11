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
    padding: 12px 9px;
    background: rgba(0, 0, 0, 0.6);
    background: rgba(0, 0, 0, 0.6);
`;

const GalleryItemOverlayText = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: white;
`;

const GalleryItem = ({imageUrl, text}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <StyledGalleryItem 
            onMouseEnter={() => setShowOverlay(true)} 
            onMouseLeave={() => setShowOverlay(false)}>
            <Image url={imageUrl} />
            {showOverlay && (
                <GalleryItemOverlay>
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
