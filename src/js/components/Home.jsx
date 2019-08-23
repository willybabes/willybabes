import React, { Component } from 'react'
import styled from 'styled-components'

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

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 460px) {
        flex-direction: column;
    }
`

export default class Home extends Component {
    render () {
        return (
            <TextContainer>
                <Text>Willybabes //</Text>
                <SubText>Front-end<br/>Developer</SubText>
            </TextContainer>
        )
    }
}
