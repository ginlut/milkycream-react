import './NavBar.css'
import CartWidget from '../CartWidget/CartWiget'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom'
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
            <Container className="fluid">
                <NavLink to="/" className="titulo navbar-brand">Milkycream</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavLink to="/" data-rr-ui-event-key className="nav-link">Inicio</NavLink>
                        <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                        { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className="dropdown-item">{cat.description}</NavLink>)}
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