import React from 'react'
import '../scss/utils/Banner.scss';
import '../scss/utils/index.scss';
import ImageBannerAbout from '../components/ImageBannerAbout/ImageAbout'
import BannerAbout from '../asset/banniere-apropos.png'
import Collapse from '../components/collapse/collapse';

const About = (props) => {
  return (
    <body>
      <ImageBannerAbout src= {BannerAbout} alt='decor de montagne' /> 
      <Collapse/>
    </body>
  )
}

export default About
