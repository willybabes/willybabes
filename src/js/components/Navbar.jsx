import React, { Component } from 'react'
import styled from 'styled-components'
import styles from '../styles'
import { Link } from 'react-router-dom'

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
const ListLink = styled.div`
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
                        <ListLink>
                            <Link to='/'>Home</Link>
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink>
                            <Link to='/about'>About</Link>
                        </ListLink>
                    </ListItem>
                    <ListItem>
                        <ListLink>
                            <Link to='/contact'>Contact</Link>
                        </ListLink>
                    </ListItem>
                </List>
            </NavbarContainer>
        )
    }
}
