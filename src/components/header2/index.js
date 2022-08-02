import React, { Component } from 'react';
import { connect } from 'react-redux';
import MobileMenu2 from '../MobileMenu2';
import { removeFromCart } from '../../store/actions/action';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import HeaderTopbar from '../HeaderTopbar';

class Header extends Component {
  render() {
    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <header id="header" className={this.props.topbarBlock} id="home">
        <HeaderTopbar />
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu2 />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink
                      onClick={ClickHandler}
                      className="navbar-brand logo"
                      to="/"
                    >
                      Wedd
                      <span>
                        i<i className="fa fa-heart" aria-hidden="true"></i>
                      </span>
                      ng Day
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
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
                        <NavLink onClick={ClickHandler} to="/contact">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
