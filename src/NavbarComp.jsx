import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
// import {NavLink} from "react-router-dom";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
function NavbarComp() {
  return (
    <>
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        collapseOnSelect
        expand="md"
        className="p-3"
      >
        {/* <Container> */}
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="50"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CRUD
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          style={{background:'#0d6efd'}}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <p style={{ margin: "10px" }}>
              <NavLink 
                to="/add"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "" : "none",
                 })}
              >
                + Create
              </NavLink>
            </p>
              <p style={{ margin: "10px" }}>
              <NavLink 
                to="/"
                style={({ isActive }) => ({
                  textDecoration: isActive ? "" : "none",
                 })}
              >
                All
              </NavLink>
              </p>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas> */}
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NavbarComp;
