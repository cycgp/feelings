import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coupleImg1 from '../../images/couple/1.jpg';

class CoupleSection extends Component {
  render() {
    return (
      <section className="couple-section section-padding" id="couple">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-xs-12">
              <div className="couple-area clearfix">
                <div className="text-grid bride">
                  <h3>Morrie M.C. Chiu</h3>
                  <p>
                    苗栗三義 淳樸善良客家媳婦
                    <br />
                    喜歡咖啡、吃甜點、耍廢、自由行
                    <br />
                    夢想是搬到海邊開冰淇淋店
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/morriemcchiu/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/momochiuchiu/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="middle-couple-pic">
                  <div className="middle-couple-pic-inner">
                    <img src={coupleImg1} alt="" />
                  </div>
                </div>
                <div className="text-grid groom">
                  <h3>Henry C.Y. Chien</h3>
                  <p>
                    南投草屯 local 新好男人
                    <br />
                    喜歡棒球、滑雪、衝浪、爬山、露營
                    <br />
                    夢想是去很冷的地方生出一個棒球隊
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/chienchingyuan/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/greatxplain/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoupleSection;
