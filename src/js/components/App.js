import React, { Component } from 'react'
import Navbar from './Navbar'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../styles'

const Text = styled.h4`
    padding: 1rem;
    color: ${props => props.theme.colors.lightForeground};
    font-size: 2rem;
    text-align: center;
    font-family: ${props => props.theme.fonts.main};
`

const Container = styled.div`
    background: ${props => props.theme.colors.background};
    height: 100vh;
`

class App extends Component {
    render () {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Navbar />
                    <Text>William Taylor - Front-end Developer</Text>
                </Container>
            </ThemeProvider>
        )
    }
}

export default App