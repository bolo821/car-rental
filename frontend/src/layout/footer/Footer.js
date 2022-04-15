import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  ©2022 AutoRental, All Rights Reserved
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#"
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                    >
                      Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                    >
                      Privacy policy
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                    >
                      Terms and conditions
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
