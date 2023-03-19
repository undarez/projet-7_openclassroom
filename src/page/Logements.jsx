import React from 'react';
import Carousel from '../components/carousel/carousel';
import Data from '../data/logements.json';
import '../scss/utils/_logement.scss';
import { useParams } from 'react-router-dom';

const Logements = () => {
      const { id } = useParams();
      const oneLogement = Data.filter((logement) => logement.id === id)[0];
      return (
            // contenue de la page logement.
            <div className="container">
                  <Carousel
                        src={oneLogement.pictures}
                        alt={oneLogement.title}
                  />
                  <div className='container-text-display'>
                        <p className='color-p'>
                        {oneLogement.title}
                        </p>             
                        <span className='position-desc'>
                        {oneLogement.location}
                        </span>
                  </div>
            </div>
      );
};

export default Logements;
