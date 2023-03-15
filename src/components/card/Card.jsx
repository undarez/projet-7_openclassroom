import React from 'react';
import '../../scss/utils/_Card.scss';
import '../../scss/utils/index.scss'
const Card = ({ id, title, location, cover }) => {
      return (
            <body className="desc-card">
                  <div className="position">
                    <div className='overlay-banniere'></div>
                        <img className="img-cover" src={cover} 
                        alt="location" />
                        <article className='text-banniere'>
                              <h1>{title}</h1>
                              {/* <p>{location}</p> */}
                        </article>
                  </div>
            </body>
      );
};
export default Card;