import React from 'react';
// Card = au fichier qui va contenir le model de chaque carte
import Card from '../card/Card';
// data correspond au donnée du fichier Json
import data from '../../data/logements.json';
// liste appart = container gris de la maquette
import '../../scss/utils/_ListeAppart.scss';
import '../../scss/utils/index.scss'

const ListeAppart = () => {
      console.log(data);
      return (
            // item reprend les eléments du fichier logement.json
            <body className='liste-position'>
                  <div className="bg-gris">
                        {data.map((item) => (
                              <Card
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    location={item.location}
                                    cover={item.cover}
                              />
                        ))}
                  </div>
            </body>
      );
};
export default ListeAppart;
