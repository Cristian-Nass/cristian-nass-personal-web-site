import {useState} from 'react';
import SubMenus from './SubMenus';
const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuOpen = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '40px',
          backgroundColor: '#333',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          paddingRight: '20px',
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '30px',
            //   justifyContent: 'center',
            width: '100%',
          }}>
          <li>
            <a
              href="#html"
              className="navbar-button"
              onMouseEnter={handleSubMenuOpen}
              onMouseLeave={handleSubMenuClose}>
              HTML
            </a>
          </li>
          <li>
            <a
              href="#css"
              className="navbar-button"
              onMouseEnter={handleSubMenuOpen}
              onMouseLeave={handleSubMenuClose}>
              CSS
            </a>
          </li>
          <li>
            <a
              href="#js-ts"
              className="navbar-button"
              onMouseEnter={handleSubMenuOpen}
              onMouseLeave={handleSubMenuClose}>
              JS/TS
            </a>
          </li>
          <li>
            <a
              href="#react"
              className="navbar-button"
              onMouseEnter={handleSubMenuOpen}
              onMouseLeave={handleSubMenuClose}>
              React
            </a>
          </li>
        </ul>
      </nav>
      {isSubMenuOpen && <SubMenus />}
    </>
  );
};

export default Navbar;
