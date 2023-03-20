import React from 'react';
import Carousel from '../components/carousel/carousel';
import Data from '../data/logements.json';
import '../scss/utils/_logement.scss';
import { useParams } from 'react-router-dom';
import Tags from '../components/tags/Tags';


const Logements = () => {
      const { id } = useParams();
      const oneLogement = Data.filter((logement) => logement.id === id)[0];
      return (
            // contenue de la page logement.
            <div className="container-flex">
                  <Carousel
                        src={oneLogement.pictures}
                        alt={oneLogement.title}
                  />
                  <div className="container-text-display">
                        {/* cette div sert juste de container pour positionner location en dessous de title. */}
                        <div>
                        <h2 className="color-h">{oneLogement.title}</h2>
                              <span className="position-desc">{oneLogement.location}</span>
                              {oneLogement.tags.map((item)=>(
                                    <Tags key={item.id} id={item.id} tags={item} />
                              ))}

                        </div>
                        <div className="container-seller">
                              <p className="color-p">{oneLogement.host.name}</p>
                              <img
                                    className="img-seller"
                                    src={oneLogement.host.picture}
                                    alt={oneLogement.host.name}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Logements;
