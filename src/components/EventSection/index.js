import React from 'react';
import SectionTitle from '../SectionTitle';
import sImg1 from '../../images/event/1.jpg';
import sImg2 from '../../images/event/2.jpg';
import LocationMap from '../Modal';

const Events = [
  {
    Simg: sImg1,
    title: 'THE RECEPTION',
    li1: 'Saturday, 8 Oct, 2022\n11:20 AM - 12:00 PM',
    li2: '台中長榮桂冠酒店 B1 長榮廳',
  },
  {
    Simg: sImg2,
    title: 'WEDDING PARTY',
    li1: 'Saturday, 8 Oct, 2022\n12:00 PM',
    li2: '台中長榮桂冠酒店 B1 長榮廳',
  },
];

const EventSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="events"
    >
      <div className="container">
        <SectionTitle MainTitle={'TIME AND PLACE'} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-6 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <img src={event.Simg} alt="" />
                  </div>
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul style={{ whiteSpace: 'pre-wrap' }}>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>
                        <LocationMap />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
