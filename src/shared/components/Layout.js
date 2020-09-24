import React from "react";
import propTypes from "prop-types";
import styled, { css } from "styled-components";

import { Navbar } from "./navbar";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Wrapper = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    overflow: hidden auto;
    ${props => props.background && css`
        background: ${props.theme.colours[props.background] || props.background};
    `}
`;

const Content = styled.div`
    min-height: 100%;
    max-width: 90vw;
    width: 100%;
    margin: auto;
    padding: 1.5rem;
`;

const Layout = ({ children, pageName }) => {
    return (
        <Body>
            <Navbar pageName={pageName}/>
            <Wrapper>
                <Content>
                    {children}
                </Content>
            </Wrapper>
        </Body>
    );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  pageName: propTypes.number.isRequired,
};

export default Layout;
