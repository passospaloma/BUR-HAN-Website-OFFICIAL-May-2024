import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "../../assets/img/header-logo.png";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";

export default function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  //navbar scroll changeBackground function
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={colorChange ? "topbar topbarChangeColor" : "topbar"}>
      <div className="contact-info">
        <a href="tel:604-983-2687" className="d-flex align-items-center">
          <i className="fa-solid fa-phone"></i>
          <span>(604) 983-2687</span>
        </a>
        <a
          href="mailto:gardenandlawncare@bur-han.ca"
          className="d-flex align-items-center"
        >
          <i className="fa-solid fa-envelope d-flex align-items-center ms-4">
            {" "}
          </i>
          <span>gardenandlawncare@bur-han.ca</span>
        </a>
        <a
          href="https://www.facebook.com/bhgardenandlawncare"
          className="social d-flex align-items-center"
        >
          <i className="fa-brands fa-facebook"></i>{" "}
        </a>
        <a
          href="https://www.instagram.com/bhgardenandlawncare"
          className="social d-flex align-items-center"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/user/readyforvideo"
          className="social d-flex align-items-center"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a
          href="https://www.pinterest.ca/bhgardenandlawn"
          className="social d-flex align-items-center"
        >
          <i className="fa-brands fa-pinterest"></i>
        </a>
      </div>
      <Navbar
        variant="dark"
        expand="lg"
        className={
          colorChange
            ? "navbarColorChange fixed-top d-flex align-items-center"
            : "fixed-top d-flex align-items-center header-transparent"
        }
      >
        <Navbar.Brand href="#">
          <h1 style={{ display: "none" }}>BUR-HAN Garden & Lawn Care</h1>
          <a href="/">
            <img className="logo" src={logo} alt="BUR-HAN logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsible-nav-dropdown" />
        <Navbar.Offcanvas id="collapsible-nav-dropdown">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className={
                colorChange
                  ? "navlinkColorChange justify-content-end flex-grow-1 pe-5"
                  : "nav justify-content-end flex-grow-1 pe-5"
              }
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>

              <NavDropdown
                title="Services"
                id="collapsible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="/services/services-and-locations">
                  Services and Locations
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/landscape-maintenance">
                  Landscape Maintenance
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/residential-lawn-care">
                  Residential Lawn Care
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/hardscape-installs-maintenance">
                  Hardscape Installs/Maintenance
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/softscape-installs-maintenance">
                  Softscape Installs/Maintenance
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/design-and-modelling">
                  Designs and Modelling
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/snow-management">
                  Snow Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/services/european-chafer-beetle-control">
                  European Chafer Beetle Control
                </NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="/our-projects">Our Projects</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
              <Nav.Link href="/join-our-team">Join Our Team</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <button className="quote">
                <a className="quotea" href="/contact-us">
                  Get A Quote
                </a>
              </button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}
