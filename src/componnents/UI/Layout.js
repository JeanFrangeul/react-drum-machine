import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import GlobalStyle from './GlobalStyle';

import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';

import Header from "componnents/Header";
import Footer from "componnents/Footer";



const Layout = ({ children }) => {
    const [isLight, setIsLignt] = useState(true);

    const handleToggleTheme = (event) => {
        setIsLignt(!isLight);
    }

    return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <Wrapper>
            <GlobalStyle/>
            <Header />
            <Main>{children}</Main>
            <Footer isLight={isLight} handleToggleTheme={handleToggleTheme} />
        </Wrapper>
    </ThemeProvider>
    )
}

export default Layout;

console.log("Made by Ratus")


const Wrapper = styled.div``;

const Main = styled.div`
    min-height: calc(100vh - 160px);
    width: 96%;
    max-width: 1240px;
    margin: auto;
    display: flex;
`;
