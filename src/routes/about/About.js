import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import ApoaImage from "assets/images/about/1.jpg";
import { Image } from "shared/components/image";
import Layout from "shared/components/Layout";
import { PAGE_NAME } from "shared/constants/PageName";

const animateBorderColour = (props) => {
    const colours = props.theme.colours;
    return keyframes`
        0% { 
            background-color: ${colours.primary500}; 
            border-color: ${colours.primary500}; 
        }
        17% { 
            background-color: ${colours.highlight500}; 
            border-color: ${colours.highlight500}; 
        }
        33% { 
            background-color: ${colours.action500}; 
            border-color: ${colours.action500}; 
        }
        50% { 
            background-color: ${colours.info500}; 
            border-color: ${colours.info500}; 
        }
        67% { 
            background-color: ${colours.success500}; 
            border-color: ${colours.success500}; 
        }
        83% { 
            background-color: ${colours.warning500}; 
            border-color: ${colours.warning500}; 
        }
        100% { 
            background-color: ${colours.primary500}; 
            border-color: ${colours.primary500}; 
        }
    `
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const StyledImage = styled(Image)`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border: .8em solid ${props => props.theme.colours.info500};
    border-radius: 50%;
    background-color: ${props => props.theme.colours.info500};
    object-position: right bottom;
    overflow: hidden;
    animation: ${props => animateBorderColour} 10s infinite;
`;

const StyledBio = styled.div`
    margin: 1.5em 1em 2em;
    text-align: center;
`;

const StyledLink = styled(Link)`
    color: ${props => props.theme.colours.action500};
    font-weight: bold;
    &:hover {
        color: ${props => props.theme.colours.action400};
    }
`;

const About = () => {

    return (
        <Layout pageName={PAGE_NAME.ABOUT}>
            <StyledContainer>
                <StyledImage url={ApoaImage} />
                <StyledBio>
                    Software Engineer and Illustrator based in London. 
                    See some of my work <StyledLink to="/">here</StyledLink>. 
                </StyledBio>
            </StyledContainer>
        </Layout>
    );
}

export default About;