import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2 style={{ margin: 0, lineHeight: 0 }}>{props.pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
