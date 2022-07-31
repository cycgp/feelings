import React from 'react';
import { Link } from 'react-scroll';

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div
        className="wpo-upper-footer"
        style={{ paddingTop: '50px', paddingBottom: '50px' }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
              style={{ textAlign: 'center' }}
            >
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link
                    className="logo"
                    to="RSVP"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Jo
                    <span>
                      i<i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    n Our Party
                  </Link>
                </div>
                <p>在這個我們人生的重要時刻，️</p>
                <p>誠摯地邀請在生命中重要的每個你參加我們的喜宴，</p>
                <p>與我們一起慶祝狂歡，</p>
                <p>讓這個充滿意義的日子更加圓滿幸福 ❤❤❤</p>
                <p>10.08 期待您的到來</p>
                <p style={{ paddingTop: '30px' }}>敬原 Henry & 孟婕 Morrie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {' '}
                &copy; 2022 Design By Henry & Morrie's Wedding. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
