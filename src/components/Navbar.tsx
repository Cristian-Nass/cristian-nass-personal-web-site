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
    {title: 'Tips & Notes', link: 'https://cristian-notes.web.app', id: '6'},
  ];

  return (
    <>
      {matches ? (
        <div className="py-6  lg:py-10 px-12 lg:px-26">
          <nav className="text-base z-20 relative text-stone-300 bg-slate-800 bg-opacity-60 float-left rounded-md px-4 py-1">
            <ul className="flex gap-8">
              {items.map((item) =>
                item.title === 'Tips & Notes' ? (
                  <a href={item.link} target="_blank" key={item.id}>
                    <li>{item.title}</li>
                  </a>
                ) : (
                  <Link key={item.id} to={item.link}>
                    <li className="cursor-pointer hover:text-slate-500">
                      {item.title}
                    </li>
                  </Link>
                )
              )}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="py-6 lg:py-20 px-12 lg:px-36">
          <nav
            className="text-lg z-20 relative text-stone-300 float-right bg-slate-700 px-2 py-2 cursor-pointer hover:bg-slate-500"
            onClick={() => setMenuToggle(!menuToggle)}>
            <ul className="flex px-0 py-0">
              <div>
                <div className="w-5 bg-white" style={{height: '2px'}}></div>
                <div
                  className="mt-1 w-5 bg-white"
                  style={{height: '2px'}}></div>
                <div
                  className="mt-1 w-5 bg-white"
                  style={{height: '2px'}}></div>
              </div>
            </ul>
          </nav>
          {menuToggle && (
            <div
              className="hamburger-manu-container bg-slate-800 mt-8 px-2 py-1 text-base w-36 absolute z-10 right-12"
              style={{
                border: 'solid 1px rgb(154, 156, 158)',
                boxShadow: '2px 2px 2px rgb(93, 93, 93)',
              }}>
              {items.map((item) => (
                <Link to={item.link} key={item.id}>
                  <div className="menu-items-mobile hover:bg-slate-300 hover:text-black px-2 py-1 text-slate-400">
                    <div onClick={() => setMenuToggle(false)}>{item.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
