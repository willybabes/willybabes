import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.h4`
    color: red;
`

export default class About extends Component {
    render () {
        return (
            <Header>THis is the abpout ting</Header>
        )
    }
}
