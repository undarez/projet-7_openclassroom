import { Link } from 'react-router-dom';
import logo from '../../asset/logo-Kasa.png';
function Navbar() {
      return (
                  <header>
                        <img
                              className="kasa-logo"
                              src={logo}
                              alt="logo de Kasa"
                        />
                        <nav className="container-nav">
                              <Link className="typo" to="/">
                                    Acceuil
                              </Link>
                              <Link className="typo" to="/a-propos">
                                    About
                              </Link>
                        </nav>
                  </header>
      );
}
export default Navbar;