import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Headroom from "headroom.js";
import {
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const DemoNavbar = () => {
  const history = useHistory();
  
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const handleScroll = to => {
    switch (to) {
      case 'home': {
        document.getElementById("header-id").scrollIntoView({ behavior: "smooth" });
        break;
      }
      case 'partner': {
        document.getElementById("partner-id").scrollIntoView({ behavior: "smooth" });
        break;
      }
      case 'contact': {
        document.getElementById("contact-id").scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <>
      <header className="header-global headroom--not-top" id="header-id">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <Link className="mr-lg-5 logo-link-rt" to="/">
              <img
                alt="..."
                src={require("../../assets/img/logo.webp")}
              />
            </Link>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("../../assets/img/logo.webp")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon cursor-pointer"
                    to="#"
                    onClick={() => {history.push('/'); handleScroll('home')}}
                  >
                    <span className="nav-link-inner--text ml-2">
                      Home
                    </span>
                  </NavLink>
                </NavItem>
                {
                  (history.location.pathname.includes('clickid') || history.location.pathname === '/') &&
                  <>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon cursor-pointer"
                        to="/"
                        onClick={() => handleScroll('partner')}
                      >
                        <span className="nav-link-inner--text ml-2">
                          Our Partners
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link-icon cursor-pointer"
                        to="/"
                        onClick={() => handleScroll('contact')}
                      >
                        <span className="nav-link-inner--text ml-2">
                          Subscribe
                        </span>
                      </NavLink>
                    </NavItem>
                  </>
                }
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default DemoNavbar;
