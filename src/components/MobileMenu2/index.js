import React, { Component } from 'react';
import { Events } from 'react-scroll';
import './style.css';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  componentDidMount = () => {
    Events.scrollEvent.register('begin', () => {
      this.setState({
        isMenuShow: false,
      });
    });
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
          <div className="menu-close">
            <div className="clox" onClick={this.menuHandler}>
              <i className="ti-close"></i>
            </div>
          </div>

          <ul className="responsivemenu">
            <li>
              <Link to={{ pathname: '/' }}>Home</Link>
            </li>
            <li>
              <Link to={{ pathname: '/#couple' }}>Couple</Link>
            </li>
            <li>
              <Link to={{ pathname: '/#story' }}>Story</Link>
            </li>
            <li>
              <Link to={{ pathname: '/#gallery' }}>Gallery</Link>
            </li>
            <li>
              <Link to={{ pathname: '/#events' }}>Events</Link>
            </li>
            <li>
              <Link to={{ pathname: '/#RSVP' }}>RSVP</Link>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="showmenu" onClick={this.menuHandler}>
          <button type="button" className="navbar-toggler open-btn">
            <span className="icon-bar first-angle"></span>
            <span className="icon-bar middle-angle"></span>
            <span className="icon-bar last-angle"></span>
          </button>
        </div>
      </div>
    );
  }
}
