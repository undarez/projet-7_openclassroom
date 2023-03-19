import React from 'react';
import Carousel from '../components/carousel/carousel';
import Data from '../data/logements.json';
import '../scss/utils/_logement.scss';
import { useParams } from 'react-router-dom';

const Logements = () => {
      const { id } = useParams();
      const oneLogement = Data.filter((logement) => logement.id === id)[0];
      return (
            <div className="container">
                  <Carousel
                        src={oneLogement.pictures}
                        alt={oneLogement.title}
                  />
            </div>
      );
};
export default Logements;
