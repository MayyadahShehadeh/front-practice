import React, { Component } from 'react'
import { Nav, Navbar,Container } from 'react-bootstrap'
export class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="home">Drinks</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="Fav">Fav</Nav.Link>
                            </Nav>
                       
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header
