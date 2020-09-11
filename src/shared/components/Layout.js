import React from 'react';
import styled from 'styled-components';

import { Navbar } from './navbar';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

const Content = styled.div`
    position: relative;
    flex: 1;    
    max-width: 90vw;
    width: 100%;
    margin: auto;
    padding: 0 20px;
`;

const Layout = ({children, pageName}) => {
    return (
        <Wrapper>
            <Navbar pageName={pageName}/>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Layout;
