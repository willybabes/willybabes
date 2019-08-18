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
`

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                Illybabes is a fitty <Text>Option A all the time!</Text>
            </div>
        )
    }
}

export default App