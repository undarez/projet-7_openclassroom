import React from 'react';
import '../scss/utils/Banner.scss';
import '../scss/utils/index.scss';
import ImageBannerAbout from '../components/ImageBannerAbout/ImageAbout';
import BannerAbout from '../asset/banniere-apropos.png';
import Collapse from '../components/collapse/collapse';
import dataCollapse from '../data/Collapse.json';

const About = () => {
      return (
            <div>
                  <ImageBannerAbout src={BannerAbout} alt="decor de montagne" />
                  {dataCollapse.map((item) => (
                        <Collapse
                              key={item.title}
                              title={item.title}
                              content={item.content}
                        />
                  ))}
            </div>
      );
};

export default About;
