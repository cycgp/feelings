import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import sImg1 from '../../images/story/1.jpg';
import sImg2 from '../../images/story/2.jpg';
import sImg3 from '../../images/story/3.jpg';
import sImg4 from '../../images/story/4.jpg';

import sIcon1 from '../../images/story/1.png';
import sIcon2 from '../../images/story/2.png';
import sIcon3 from '../../images/story/3.png';
import sIcon4 from '../../images/story/4.png';

import Shape from '../../images/story/shape.jpg';

const StorySection = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const Tabs = [
    {
      Id: '1',
      tabItem: 'First Meet',
    },
    {
      Id: '2',
      tabItem: 'First Date',
    },
    {
      Id: '3',
      tabItem: 'Marige Proposal',
    },
    {
      Id: '4',
      tabItem: 'We Are Married',
    },
  ];

  const Story = [
    {
      Id: '1',
      sImg: sImg1,
      sIcon: sIcon1,
      Shape: Shape,
      sTitle: 'First Meet',
      date: '2012 Summer',
      description:
        '我們在高中相識，度過最單純快樂的青春歲月，成為十年來的摯友與夥伴。一路看著彼此跌跌撞撞、矇矇懂懂的長大成人。',
    },
    {
      Id: '2',
      sImg: sImg2,
      sIcon: sIcon2,
      Shape: Shape,
      sTitle: 'First Date',
      date: '2021 Feb',
      description:
        '感謝彼此十年來的相知相惜，我們在一起了❤️這一年，我們一起爬山、露營、變胖、走遍台灣各個角落。分享彼此的人生夢想與冒險，享受每一個溫暖浪漫的生活時刻。',
    },
    {
      Id: '3',
      sImg: sImg3,
      sIcon: sIcon3,
      Shape: Shape,
      sTitle: 'Marige Proposal',
      date: '2022 Jan',
      description:
        '敬原勇敢牽起了孟婕的手，決心一同承擔彼此的未來。不論生老病死，無論順境逆境，都要互相包容，彼此扶持。我們決定一起攜手走向未來，邁向人生的新階段。',
    },
    {
      Id: '4',
      sImg: sImg4,
      sIcon: sIcon4,
      Shape: Shape,
      sTitle: 'We Are Married',
      date: '2022.05.02',
      description:
        '我們結婚啦！我們從兩個人變成了一個家。我們將一同品嚐生活著酸甜苦辣，繼續創造屬於我們的未來，成為彼此生命中不可或缺的伴侶，完整彼此的人生。',
    },
  ];

  return (
    <section className="wpo-story-section section-padding" id="story">
      <div className="container">
        <SectionTitle MainTitle={'Our love story'} />
        <div className="row align-items-center justify-content-center">
          <div className="col col-lg-12 col-12">
            <div className="tab-area">
              <div className="tablinks">
                <Nav tabs className="service-thumbs-outer">
                  {Tabs.map((tab, titem) => (
                    <NavItem key={titem}>
                      <NavLink
                        className={`service-thumb ${classnames({
                          active: activeTab === tab.Id,
                        })}`}
                        onClick={() => {
                          toggle(tab.Id);
                        }}
                      >
                        {tab.tabItem}
                        <span className="number">{tab.tabNumber}</span>
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </div>
              <TabContent activeTab={activeTab}>
                {Story.map((story, Sitem) => (
                  <TabPane tabId={story.Id} key={Sitem}>
                    <div className="wpo-story-item">
                      <div className="wpo-story-img">
                        <img src={story.sImg} alt="" />
                      </div>
                      <div className="wpo-story-content">
                        <div className="wpo-story-content-inner">
                          <span>
                            <img src={story.sIcon} alt="" />
                          </span>
                          <h2>{story.sTitle}</h2>
                          <span>{story.date}</span>
                          <p>{story.description}</p>
                          <div className="border-shape">
                            <img src={story.Shape} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                ))}
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
