import React from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Scroller from "../components/scroller"

import logo from '../images/logoT.png';
import { Link } from 'gatsby'

const activeStyle = {
  color: " #eece1a",
}


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
              <img src={logo} alt="neologic.logo" />
            </ Link>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">

                <li className="nav-item" style={this.activeStyle}>
                  <Link className="nav-link" to="/" >
                    Početna
                  </Link>
                </li>
                <li className="nav-item" activeStyle={this.activeStyle}>
                  <Link className="nav-link" to="/usluge">
                    Usluge
                  </Link>
                </li>
                <li className="nav-item" activeStyle={this.activeStyle}>
                  <Link className="nav-link" to="/partneri">Partneri</Link>

                </li>
                <li className="nav-item" activeStyle={this.activeStyle}>
                  <Link className="nav-link" to="/projekti">Reference</Link>
                </li>
                <li className="nav-item" activeStyle={this.activeStyle}>
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
