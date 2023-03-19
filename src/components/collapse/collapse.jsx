import { useState } from 'react';
import '../../scss/utils/Collapse.scss';
import { ReactComponent as Chevron } from '../../asset/chevronDown.svg';

// donner un nom au tableau contenue-collapse

const Collapse = ({ title, content }) => {
      const [isOpen, setIsOpen] = useState(false);
      //     appel de la variable detail qui permet de nous creer un collapse
      return (
            <div className="containerCollapse">
                  <details className="bgCollapse">
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
                        <p>{content}</p>
                  </details>
            </div>
      );
};
export default Collapse;

// export default collapse
