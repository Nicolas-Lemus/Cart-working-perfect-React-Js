import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.webp';
import Navbar from 'react-bootstrap/Navbar'
import icoInstagram from "../../images/icons8-instagram-100.png"
import icoFacebook from "../../images/icons8-facebook-100.png"
import icoTwitter from "../../images/icons8-twitter-100.png"



const Footer = () => {
  return (
    <div className='footerImportant'>
        <div className='footer'>
            <Navbar.Brand className='logoFooter' href="/"><img src={logo} alt="logoTiendaFashion" /></Navbar.Brand>
            <div className='footerList'>
                <h2>Tienda Fashion</h2>
                <div className='footerListItems'>
                    <ul>
                        <h3>SmartPhones</h3>
                        <li>Redmi</li>
                        <li>Xiaomi</li>
                        <li>Iphone</li>
                    </ul>
                    <ul>
                        <h3>Notebooks</h3>
                        <li>Gamer</li>
                        <li>Dell</li>
                        <li>Hp Ryzen</li>
                    </ul>
                    <ul>
                        <h3>Consolas</h3>
                        <li>Nintendo Switch</li>
                        <li>Xbox Series S</li>
                        <li>Sony PlayStation 5 </li>
                        <li>Sony Ps4 Slim</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='footerContact'>
            <img src={icoInstagram} alt="icono"/>
            <img src={icoFacebook} alt="icono" />
            <img src={icoTwitter} alt="icono" />
        </div>
        <div className='footerContact'>
            <h3>Cel: 020220202002</h3>
            <h3>Direction: Canelones/Uruguay</h3>
        </div>
        <div className='footerFoot'>
            <hr/>
            <h4>Derechos Reservados</h4>
            <h5>2023 CoderHouse</h5>
        </div>
    </div>
)
}

export default Footer