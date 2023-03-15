import React from 'react';
import logo from '../asset/logo.svg';
import '../scss/utils/index.scss';
const footer = () => {
      return (
            <body>
                  <footer className="bg-footer">
                        <img
                              className="kasa-logo"
                              src={logo}
                              alt="logo de Kasa"
                        />
                        <p className="text-white">
                              © 2023 KASA. All rights reserved{' '}
                        </p>
                  </footer>
            </body>
      );
};
export default footer;
