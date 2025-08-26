const Navbar = () => {
  return (
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
        }}>
        <li>
          <a href="#html" className="navbar-button">
            HTML
          </a>
        </li>
        <li>
          <a href="#css" className="navbar-button">
            CSS
          </a>
        </li>
        <li>
          <a href="#js-ts" className="navbar-button">
            JS/TS
          </a>
        </li>
        <li>
          <a href="#react" className="navbar-button">
            React
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
