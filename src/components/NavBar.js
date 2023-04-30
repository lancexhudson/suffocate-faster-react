import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="sxf-logo">.</div>
          {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link> */}

          {/* <div className="sxf-logo">
            <img
              src="https://user-images.githubusercontent.com/106623072/233876268-89814ddb-8d4f-4d7b-b25c-58d891a15f96.png"
              alt=""
            />
          </div> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/bio" className="nav-links" onClick={closeMobileMenu}>
                Bio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-links" onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shows  "
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Shows
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Home</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
