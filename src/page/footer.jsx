import React from 'react';
import logo from '../asset/logo.svg';
const footer = () => {
      return (
            <footer className="bg-footer">
                  <img className="kasa-logo" src={logo} alt="logo de Kasa" />
                  <p className="text-white">
                        © 2023 KASA. All rights reserved{' '}
                  </p>
            </footer>
      );
};
export default footer;
