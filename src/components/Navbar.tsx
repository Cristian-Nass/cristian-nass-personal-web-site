import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useMediaQuery} from 'usehooks-ts';

const Navbar = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [menuToggle, setMenuToggle] = useState(false);
  const items = [
    {title: 'Home', link: '/', id: '1'},
    {title: 'About', link: '/about', id: '2'},
    {title: 'Education', link: '/education', id: '3'},
    {title: 'Experiences', link: '/experiences', id: '4'},
    {title: 'Contact', link: '/contact', id: '5'},
  ];

  return (
    <>
      {matches ? (
        <div className="py-14  lg:py-20 px-12 lg:px-36">
          <nav className="text-2xl z-20 relative text-stone-300 hamburger-manu">
            <ul className="flex gap-12">
              {items.map((item) => (
                <Link key={item.id} to={item.link}>
                  <li>{item.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="py-6  lg:py-20 px-12 lg:px-36">
          <nav className="text-2xl z-20 relative text-stone-300 hamburger-manu">
            <ul className="flex gap-12">
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                style={{cursor: 'pointer', padding: '4px 0px'}}>
                <div
                  style={{
                    width: '26px',
                    height: '2px',
                    backgroundColor: 'white',
                  }}></div>
                <div
                  style={{
                    marginTop: '6px',
                    width: '26px',
                    height: '2px',
                    backgroundColor: 'white',
                  }}></div>
                <div
                  style={{
                    marginTop: '6px',
                    width: '26px',
                    height: '2px',
                    backgroundColor: 'white',
                  }}></div>
              </div>
            </ul>
          </nav>
          {menuToggle && (
            <div className="hamburger-manu-container">
              {items.map((item) => (
                <div key={item.id} className="menu-items-mobile">
                  <Link to={item.link}>
                    <div onClick={() => setMenuToggle(false)}>{item.title}</div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
