import "./AppLayout.style.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (event) => {
    event.preventDefault();
    //url 변경
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  const goHome = () => {
    navigate(`/`);
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" variant="navbar">
        <Container fluid>
          <div className="logo" onClick={goHome}>
            <img src="/logo.png" alt="logo" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
