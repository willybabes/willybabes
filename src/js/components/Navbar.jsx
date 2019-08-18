import React, { Component } from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
    background: red;
    padding: 10px;
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
`

const ListItem = styled.li`
    padding: 10px;
`

export default class Navbar extends Component {
    render () {
        return (
            <NavbarContainer>
                <List>
                    <ListItem><a href="#">About</a></ListItem>
                    <ListItem><a href="#">Contact</a></ListItem>
                </List>
            </NavbarContainer>
        )
    }
}