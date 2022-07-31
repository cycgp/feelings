import React from 'react';
import SectionTitle from '../SectionTitle';
import pImg1 from '../../images/portfolio/1-min.jpg';
import pImg2 from '../../images/portfolio/2-min.jpg';
import pImg3 from '../../images/portfolio/3-min.jpg';
import pImg4 from '../../images/portfolio/4-min.jpg';
import pImg5 from '../../images/portfolio/5-min.jpg';
import pImg6 from '../../images/portfolio/6-min.jpg';
import pImg7 from '../../images/portfolio/7-min.jpg';
import pImg8 from '../../images/portfolio/8-min.jpg';
import pImg9 from '../../images/portfolio/9-min.jpg';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';

const Portfolios = [
  {
    Pimg: pImg1,
  },
  {
    Pimg: pImg2,
  },
  {
    Pimg: pImg3,
  },
  {
    Pimg: pImg4,
  },
  {
    Pimg: pImg5,
  },
  {
    Pimg: pImg7,
  },
  {
    Pimg: pImg8,
  },
  {
    Pimg: pImg9,
  },
  {
    Pimg: pImg6,
  },
];

const PortfolioSection2 = (props) => {
  return (
    <section
      className={`wpo-portfolio-section section-padding ${props.pClass}`}
      id="gallery"
    >
      <div className="container">
        <SectionTitle MainTitle={'Sweet Moments'} />
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                {Portfolios.map((portfolio, pitem) => (
                  <div className="grid" key={pitem}>
                    <div className="img-holder">
                      <ReactFancyBox
                        thumbnail={portfolio.Pimg}
                        image={portfolio.Pimg}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection2;
