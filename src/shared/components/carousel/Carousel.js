import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap";

const ARROW_SIZE = 30;

const StyledContainer = styled.div`
    display: flex;
    position: relative;
    max-width: 800px;
    margin: auto;
    margin-top: 3em;
`;

const ArrowContainer = styled.div`
    position: absolute;
    top: calc(50% - 20px);
    height: ${ARROW_SIZE}px;
    width: ${ARROW_SIZE}px;
    border-radius: 50%;
    background: white;
    filter: drop-shadow(1px 1px 7px white);
    overflow: hidden;
`;

const StyledLeftArrowContainer = styled(ArrowContainer)`
    left: 1em;
`;

const StyledRightArrowContainer = styled(ArrowContainer)`
    right: 1em;
`;

const StyledArrow = (icon) => {
    return styled(icon)`
        height: auto;
        color: ${props => props.theme.colours.action500};
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.colours.action700};
        }
        @media ()
    `;
};

const StyledLeftArrow = StyledArrow(ArrowLeftCircleFill);
const StyledRightArrow = StyledArrow(ArrowRightCircleFill);

const StyledCarousel = styled.div`
    padding: 0 calc(${ARROW_SIZE}px + 2em) .3em;
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: .5em;
        cursor: pointer;
        border-radius: 10px;
        background: ${props => props.theme.colours.action1000};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colours.action500};
        border: .1em solid ${props => props.theme.colours.action1000};
        border-radius: 10px;
        &:hover {
            background: ${props => props.theme.colours.action700};
        }
    }
    scroll-behavior: smooth;

`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(9,minmax(150px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 5px;
    height: 150px;
`;

const Carousel = ({ children }) => {
    const carouselRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollCarousel = (scroll) => {
        carouselRef.current.scroll({
            left: carouselRef.current.scrollLeft + scroll,
            behaviour: "smooth",
        });
        setScrollPosition(carouselRef.current.scrollLeft);
    };

    return (
        <StyledContainer>
            <StyledCarousel ref={carouselRef}>
                <StyledGrid>
                    {children}
                </StyledGrid>
            </StyledCarousel>
            {true && (
                <>
                    <StyledLeftArrowContainer>
                        <StyledLeftArrow 
                            onClick={() => scrollCarousel(-250)} 
                            scrollPosition={scrollPosition} 
                            size={ARROW_SIZE}
                            title="Left Arrow" />
                    </StyledLeftArrowContainer> 
                    <StyledRightArrowContainer>
                        <StyledRightArrow 
                            onClick={() => scrollCarousel(250)}
                            scrollPosition={scrollPosition} 
                            size={ARROW_SIZE}
                            title="Right Arrow" /> 
                    </StyledRightArrowContainer>
                </>
            )}
        </StyledContainer>
    );
}

Carousel.propTypes = {
    children: propTypes.node.isRequired,
};

export default Carousel;
