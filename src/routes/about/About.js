import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import ApoaImage from 'assets/images/about/1.jpg';
import { Image } from 'shared/components/image';
import Layout from 'shared/components/Layout';
import { PAGE_NAME } from 'shared/constants/PageName';

const animateBorderColour = (props) => {
    const colours = props.theme.colours;
    return keyframes`
        0% { border-color: ${colours.primary500}; }
        17% { border-color: ${colours.highlight500}; }
        33% { border-color: ${colours.action500}; }
        50% { border-color: ${colours.info500}; }
        67% { border-color: ${colours.success500}; }
        83% { border-color: ${colours.warning500}; }
        100% { border-color: ${colours.primary500}; }
    `
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const StyledImageContainer = styled.div`
    height: 50vh;
    width: 50vh;
    margin: auto;
    border: 10px solid ${props => props.theme.colours.info500};
    border-radius: 50%;
    overflow: hidden;
    animation: ${props => animateBorderColour} 10s infinite;
`;

const StyledImage = styled(Image)`
    object-position: right bottom;
`;

const StyledBio = styled.div`
    margin: 20px 10px 30px;
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
                <StyledImageContainer>
                    <StyledImage url={ApoaImage} />
                </StyledImageContainer>
                <StyledBio>
                    Software Engineer and Illustrator based in London. 
                    See some of my work <StyledLink to="/projects">here</StyledLink>. 
                </StyledBio>
            </StyledContainer>
        </Layout>
    );
}

export default About;