import React, { Component } from 'react'
import Navbar from './Navbar'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../styles'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Oswald:700&display=swap')
        font-family: 'Oswald', sans-serif;
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

class App extends Component {
    render () {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <GlobalStyles />
                    <Container>
                        <Navbar />
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </Container>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />

//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Header() {
//   return (
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//   );
// }

// export default App;