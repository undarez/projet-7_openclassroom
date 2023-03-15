// import react
// react dom pour modifier le dom dans index.html grace à getelementbyId de root

import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/utils/index.scss';
import './scss/utils/Banner.scss';
import './scss/utils/_footer.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
