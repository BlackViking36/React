import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <>
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <strong>hAtch CaPs</strong>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Category</Nav.Link>
                        <Nav.Link href="#pricing">Shopping cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        </>
    );
};

export default NavBar;