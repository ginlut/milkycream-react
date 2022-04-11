import './NavBar.css'
import CartWidget from '../CartWidget/CartWiget'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'



const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    }, [])

    return ( 

        <Navbar className="navBar" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Milkycream</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                        { categories.map(cat => <NavDropdown.Item key={cat.id} href={`/category/${cat.id}`} >{cat.description}</NavDropdown.Item>)}
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <input
                        type="search"
                        placeholder="Search"
                        className="me-2 form-control"
                        aria-label="Search"
                        />
                        <Button variant="info">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <div>
                <CartWidget  />
            </div>
        </Navbar>
    )
}

export default NavBar