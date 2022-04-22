import React from "react";
import { Link } from 'react-router-dom';
import {
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                &copy;2022 AutoRentals247, All Rights Reserved
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <Link to="/" className="footer-link-rt">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about" className="footer-link-rt">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="footer-link-rt">Contact Us</Link>
                </NavItem>
                <NavItem>
                  <Link to="/privacy" className="footer-link-rt">Privacy policy</Link>
                </NavItem>
                <NavItem>
                  <Link to="terms" className="footer-link-rt">Terms and conditions</Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
