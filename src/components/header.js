import React from "react"
import { Navbar } from "react-bootstrap"
import Scroller from "../components/scroller"
import Logo from "../assets/Neologic_logo.svg"
import { Link } from 'gatsby'



export default class Header extends React.Component {

  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {


    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
          collapseOnSelect={true}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <Logo />
            </ Link>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">

                <li className="nav-item" >
                  <Link className="nav-link" to="/" >
                    Početna
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/usluge">
                    Usluge
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/partneri">Partneri</Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projekti">Reference</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
        </Navbar>

      </>
    );
  }
}
