import React, { useState } from 'react';
import '../../scss/utils/_etoiles.scss';
import EtoilesRouge from '../../asset/etoilesPleine.svg';
import EtoilesGris from '../../asset/etoilesVide.svg';

const Etoiles = (props) => {
      //tableau vide des etoiles en attente des choix des utilisateur
      const stars = [1, 2, 3, 4, 5];
      const [etoile, setEtoile] = useState(Number(props.rating));

      //la fonction choix etoiles va permetre de choisir entre les etoiles rouge ou grise .
      return (
            <div className="container-etoiles">
                  {stars.map(
                        (level, index) => (
                              <span key={index}>
                                    {etoile >= index + 1 ? (
                                          <img
                                                src={EtoilesRouge}
                                                alt="etoile pleine"
                                          />
                                    ) : (
                                          <img
                                                src={EtoilesGris}
                                                alt="etoile vide"
                                          />
                                    )}
                              </span>
                        )

                        // props.rating >= etoile ? (
                        // 	<img
                        // 		key={index}
                        // 		src={EtoilesRouge}
                        // 		alt="rating star"
                        // 	/>
                        // ) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
                        // 	<img
                        // 		key={index}
                        // 		src={EtoilesGris}
                        // 		alt="rating star"
                        // 	/>
                        // )
                  )}
            </div>
      );

      // const choixEtoiles = (rating) => {
      //       let starsColor = '#E3E3E3';
      //       //si le choix inferieur ou egal à et superieur ou egal à
      //       if (rating >= 1 && rating <= 5) {
      //             starsColor = '#FF6060';
      //       }
      //       return starsColor;
      // };

      // for (let i = 0; i < 5; i++) {
      //       stars.push(
      //             <div key={i}>
      //                   {i < props.rating ? (
      //                         <EtoilesRouge
      //                               className={choixEtoiles(props.rating)}
      //                         />
      //                   ) : (
      //                         <EtoilesGris
      //                               className={choixEtoiles(props.rating)}
      //                         />
      //                   )}
      //             </div>
      //       );
      // }

      // const choixEtoiles = (rating) => {
      //     for(let i = 1; i < props.rating; i++){
      //         if (props.rating <= 5){

      //         }}

      // }

      // const choixEtoiles = (props.rating) => {
      //     if (props.rating <= 5){

      //     }

      // }
};

export default Etoiles;
