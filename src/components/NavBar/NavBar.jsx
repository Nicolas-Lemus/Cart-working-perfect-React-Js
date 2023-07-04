import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.webp';
import "./Navbar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
      <Navbar bg="light" expand="lg" className='NavBar'>
      <Container className='container'>
      <Navbar.Brand href="/"><img src={logo}alt="LogoTiendaFashion" className='logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/" className='enlaces'>Home</Link>
              <Link className='enlaces' to="/products">Productos</Link>
                  <NavDropdown title="Categorias" className='enlacesDes' id="basic-nav-dropdown">
                      <NavDropdown.Item><Link className='enlaces' to="/category/Smartphones">Smartphones</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link className='enlaces' to="/category/Notebooks">Notebooks</Link></NavDropdown.Item>
                      <NavDropdown.Item><Link className='enlaces' to="/category/Console">Console</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                  </NavDropdown>
          </Nav>
          <CartWidget/>
      </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar