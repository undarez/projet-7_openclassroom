// import React, { useState } from 'react';
// import Collapsible from 'react-collapsible';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//       faChevronUp,
//       faChevronDown,
// } from '@fortawesome/fontawesome-free-solid';

// import '../../scss/utils/Collapse.scss';

// const Collapse = () => {
//       // declaration du usestate pour permettre l'ouverture et la fermeture du collapse.
//       // usetate = false donc fermé
//       const [open, setOpen] = useState(false);

//       //si pas ouvert alors tu retourne le code suivant
//       const toggleCollapse = () => {
//             setOpen(!open);
//       };
//       return (
//             <div className="collapse">
//                   {/* utilisation de ternaire ? condition si vrai : si faux */}
//                   <button
//                         type="button"
//                         className="btn-collapse"
//                         onClick={toggleCollapse}
//                   >
//                         {!open ? (
//                               //chevron ouvert up
//                               <FontAwesomeIcon icon={faChevronDown} />
//                         ) : (
//                               //chevron fermé down
//                               <FontAwesomeIcon icon={faChevronUp} />
//                         )}
//                   </button>
//                   {open && (
//                         <div className="text-banniere" trigger="Fiabilité">
//                               <div className="Collapsible__ContentInner">
//                                     <p className="color-p">
//                                           La bienveillance fait partie des
//                                           valeurs fondatrices de Kasa. Tout
//                                           comportement discriminatoire ou de
//                                           perturbation du voisinage entraînera
//                                           une exclusion de notre plateforme
//                                     </p>
//                               </div>
//                         </div>
//                   )}
//             </div>
//       );
// };

// export default Collapse;

// // export default collapse
// // write a dropdown in js?
