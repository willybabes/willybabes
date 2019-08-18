import React, { Component } from 'react'
import styled from 'styled-components'
import styles from '../styles'

const NavbarContainer = styled.div`
    color: ${styles.lightForeground};
    padding: 10px;
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
`

const ListItem = styled.li`
    padding: 2rem;
`
const ListLink = styled.a`
    color: ${styles.colors.lightForeground};
    text-decoration: none;
    border-bottom: 4px solid ${styles.colors.lightForeground};
    transition: 0.4s;

    &:hover {
        background: ${styles.colors.lightForeground};
        transition: 0.4s;
        color: ${styles.colors.background};
    }
`

export default class Navbar extends Component {
    render () {
        return (
            <NavbarContainer>
                <List>
                    <ListItem>
                        <ListLink href="#">About</ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink href="#">Contact</ListLink>
                    </ListItem>
                </List>
            </NavbarContainer>
        )
    }
}