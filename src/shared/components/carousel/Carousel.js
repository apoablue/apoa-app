import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap";

const StyledContainer = styled.div`
    display: flex;
    max-width: 800px;
    margin: auto;
    margin-top: 3em;
`;

const StyledArrow = (icon) => {
    return styled(icon)`
        height: auto;
        color: ${props => props.theme.colours.action500};
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.colours.action700};
        }
    `;
};

const StyledLeftArrow = StyledArrow(ArrowLeftCircleFill);
const StyledRightArrow = StyledArrow(ArrowRightCircleFill);

const StyledCarousel = styled.div`
    margin: 0 1em;
    padding-bottom: .3em;
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
            <StyledLeftArrow 
                onClick={() => scrollCarousel(-250)} 
                scrollPosition={scrollPosition} 
                size="170" 
                title="Left Arrow" />
            <StyledCarousel ref={carouselRef}>
                <StyledGrid>
                    {children}
                </StyledGrid>
            </StyledCarousel>
            <StyledRightArrow 
                onClick={() => scrollCarousel(250)}
                scrollPosition={scrollPosition} 
                size="170" 
                title="Right Arrow" />
        </StyledContainer>
    );
}

Carousel.propTypes = {
    children: propTypes.node.isRequired,
};

export default Carousel;
