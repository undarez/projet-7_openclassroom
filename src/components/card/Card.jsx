import React from 'react';
import '../../scss/utils/_Card.scss';
import { Link } from 'react-router-dom';
const Card = ({ id, title, location, cover }) => {
      return (
            
            <Link to={`/logements/${id}`} className="desc-card">
                  <div className="position">
                    <div className='overlay-banniere'></div>
                        <img className="img-cover" src={cover} 
                        alt="location" />
                        <article className='text-banniere'>
                              <h1>{title}</h1>
                        </article>
                  </div>
            </Link>
      );
};
export default Card;