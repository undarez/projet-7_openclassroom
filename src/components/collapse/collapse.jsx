import { useState } from 'react';
import '../../scss/utils/Collapse.scss';
import { ReactComponent as Chevron } from '../../asset/chevronDown.svg';

// donner un nom au tableau contenue-collapse

const Collapse = ({ title, content }) => {
      const [isOpen, setIsOpen] = useState(false);
      //     appel de la variable detail qui permet de nous creer un collapse
      return (
            <div className="containerCollapse">
                  <details>
                        <summary onClick={() => setIsOpen(!isOpen)}>
                              {title}
                              <Chevron
                                    style={{
                                          transform: !isOpen
                                                ? 'rotateX(180deg)'
                                                : 'rotateX(0)',
                                    }}
                              />
                        </summary>
                        {/* si mon content n'est pas un tableau alors */}
                        {!Array.isArray(content) ? (
                              <p>{content}</p>
                        ) : (
                              <ul>
                                    {
                                          // si mon content est un tableau alors on affiche en liste ul et donc map
                                          content.map((item, index) => (
                                                <li key={index}>{item}</li>
                                          ))
                                    }
                              </ul>
                        )}
                  </details>
            </div>
      );
};
export default Collapse;

// export default collapse
