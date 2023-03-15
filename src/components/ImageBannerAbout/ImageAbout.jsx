import React from 'react';
import '../../scss/utils/Banner.scss';

const ImageAbout = (props) => {
      return (
            <main>
                  <div className="container-bg">
                        <section className="container-bg">
                              <div className="overlay-banniere"></div>
                              <img
                                    className="bg-Banniere"
                                    src={props.src}
                                    alt={props.alt}
                              />
                        </section>
                  </div>
            </main>
      );
};

export default ImageAbout;
