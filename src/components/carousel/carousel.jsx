import { useState } from 'react';
import { ReactComponent as Chevron } from '../../asset/chevronDown.svg';
import '../../scss/utils/carousel.scss';
const Carousel = (props) => {
      const [currentIndex, setCurrenIndex] = useState(0);
      
// function page suivante
      const slideright = () => {
            setCurrenIndex(currentIndex - 1);

            if (currentIndex === 0) {
                  setCurrenIndex(props.src.length - 1);
            }
      };
// function page precedente
      const slideleft = () => {
            setCurrenIndex(currentIndex + 1);
            if (currentIndex === props.src.length - 1) {
                  setCurrenIndex(0);
            }
      };
      return (
            // container= dim total
            <div className="container-slider">
                  <div className="slider">
                        {/* bouton droite */}
                        <button onClick={slideright} className="btn-arrow">
                              <Chevron />
                        </button>
                        {/* bouton gauche */}
                        <button onClick={slideleft} className="btn-arrow">
                              <Chevron />
                        </button>
                        <p>
                              <span className="chiffres"></span>/
                              <span className="chiffres"></span>
                        </p>
                        <img
                              className="img-slider"
                              src={props.src[currentIndex]}
                              alt={props.alt}
                        />
                  </div>
            </div>
      );
};

export default Carousel;

