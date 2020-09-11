import React from 'react';
import styled, { css } from 'styled-components';

import { Navbar } from './navbar';

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
    ${props => props.background && css`
        background: ${props.theme.colours[props.background] || props.background};
    `}
`;

const Content = styled.div`
    height: 100%;
    max-width: 90vw;
    width: 100%;
    margin: auto;
    padding: 20px 20px 0;
`;

const Layout = ({ background, children, pageName }) => {
    return (
        <Body>
            <Navbar pageName={pageName}/>
            <Wrapper background={background}>
                <Content>
                    {children}
                </Content>
            </Wrapper>
        </Body>
    );
}

export default Layout;
