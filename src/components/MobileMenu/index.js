import React, { Component } from 'react';
import { Events, Link } from 'react-scroll';
import './style.css';
import { NavLink } from 'react-router-dom';

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
              <Link
                onClick={this.menuHandler}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="couple"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Couple
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="story"
                spy={true}
                smooth={true}
                duration={500}
              >
                Story
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="RSVP"
                spy={true}
                smooth={true}
                duration={500}
              >
                RSVP
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="events"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Events
              </Link>
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
