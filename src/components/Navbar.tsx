import {useState} from 'react';
import {useMediaQuery} from 'usehooks-ts';

const items = [
  {title: 'Home', href: '#home', id: '1'},
  {title: 'About', href: '#about', id: '2'},
  {title: 'Education', href: '#education', id: '3'},
  {title: 'Experiences', href: '#experiences', id: '4'},
  {title: 'Contact', href: '#contact', id: '5'},
  {title: 'Blog', href: 'https://cristian-blog.web.app', id: '6', external: true},
];

const Navbar = () => {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      {matches ? (
        <div className="fixed top-0 left-0 w-full z-50 py-6 px-12">
          <nav className="text-base text-stone-300 bg-slate-800 bg-opacity-60 float-left rounded-md px-4 py-1">
            <ul className="flex gap-8">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}>
                  <li className="cursor-pointer hover:text-slate-400">
                    {item.title}
                  </li>
                </a>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-50 py-6 px-12">
          <nav
            className="text-lg text-stone-300 bg-slate-700 px-2 py-2 cursor-pointer hover:bg-slate-500"
            onClick={() => setMenuToggle(!menuToggle)}>
            <div>
              <div className="w-5 bg-white" style={{height: '2px'}}></div>
              <div className="mt-1 w-5 bg-white" style={{height: '2px'}}></div>
              <div className="mt-1 w-5 bg-white" style={{height: '2px'}}></div>
            </div>
          </nav>
          {menuToggle && (
            <div
              className="hamburger-manu-container bg-slate-800 mt-2 px-2 py-1 text-base w-36 absolute z-10 right-12"
              style={{
                border: 'solid 1px rgb(154, 156, 158)',
                boxShadow: '2px 2px 2px rgb(93, 93, 93)',
              }}>
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  onClick={() => setMenuToggle(false)}>
                  <li className="menu-items-mobile hover:bg-slate-300 hover:text-black px-2 py-1 text-slate-400 list-none">
                    {item.title}
                  </li>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
