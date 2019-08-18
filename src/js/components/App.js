import React, { Component } from 'react'
import Navbar from './Navbar'
import styled, { keyframes } from 'styled-components'

const keyframesIlly = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity 1;
    }
    100% {
        opacity 0;
    }
`

const Text = styled.h4`
    animation: ${keyframesIlly} 0.2s ease-in-out 0s infinite;
    padding: 1rem;
`

const CenterText = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    height: 100vh;
`

class App extends Component {
    render () {
        return (
            <CenterText>
                {/* <Navbar /> */}
                <div>😍 Illybabes is a fitty 😍</div>
                <Text>Option A all the time! 🍈🍈</Text>
            </CenterText>
        )
    }
}

export default App