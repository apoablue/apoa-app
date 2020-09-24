import React, { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import { Image } from "shared/components/image";

const StyledContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const StyledOverlay = styled.div`
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

const StyledText = styled.div`
    font-size: 1em;
    font-weight: bold;
    text-align: center;
    color: white;
    user-select: none;
`;

const ImageWithTextOverlay = ({ imageUrl, onClick, overlayColour, updateOverlayColour = () => {}, text }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const onMouseLeave = () => {
        setShowOverlay(false);
        updateOverlayColour();
    }

    return (
        <StyledContainer 
            onClick={onClick}
            onMouseEnter={() => setShowOverlay(true)} 
            onMouseLeave={onMouseLeave}>
            <Image url={imageUrl} />
            {showOverlay && (
                <StyledOverlay overlayColour={overlayColour}>
                    <StyledText>
                        {text}
                    </StyledText>
                </StyledOverlay>
            )}
        </StyledContainer>
    );
}

ImageWithTextOverlay.propTypes = {
    imageUrl: propTypes.string.isRequired,
    onClick: propTypes.func,
    overlayColour: propTypes.string,
    updateOverlayColour: propTypes.func,
    text: propTypes.string.isRequired,
};

export default ImageWithTextOverlay;
