import React from 'react';
import '../../scss/utils/_Card.scss';
import { Link } from 'react-router-dom';
const Card = ({ id, title, location, cover }) => {
      return (
            <Link to={`/logements/${id}`}>
                  <div className="position">
                        <div className="overlay-banniere"></div>
                        <img className="img-cover" src={cover} alt="location" />
                        <article className="container-article">
                              <p className="position-title">{title}</p>
                        </article>
                  </div>
            </Link>
      );
};
export default Card;
