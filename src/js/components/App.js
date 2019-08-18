import React, { Component } from 'react'
import Navbar from './Navbar'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../styles'

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Oswald:700&display=swap')
        font-family: 'Oswald', sans-serif;
    }
`

const Text = styled.h4`
    padding: 1rem;
    color: ${props => props.theme.colors.lightForeground};
    font-size: 3rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 650px) {
        font-size: 2rem;
    }
`
const SubText = styled.h6`
    padding: 1rem;
    color: ${props => props.theme.colors.lightForeground};
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width: 650px) {
        font-size: 1rem;
    }
    @media (max-width: 460px) {
        font-size: 2rem;
    }
`

const Container = styled.div`
    // background: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.darkBackground};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23172a2c' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23224849' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%232e6665' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23398482' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2345a29e' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 460px) {
        flex-direction: column;
    }
`

class App extends Component {
    render () {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <GlobalStyles />
                    <Container>
                        <Navbar />
                        <TextContainer>
                            <Text>Willybabes //</Text>
                            <SubText>Front-end<br/>Developer</SubText>
                        </TextContainer>
                    </Container>
                </div>
            </ThemeProvider>
        )
    }
}

export default App