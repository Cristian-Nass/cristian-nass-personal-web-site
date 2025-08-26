import {useState} from 'react';
import SubMenus from './SubMenus';
const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSubMenuOpen = (item: string) => {
    setIsSubMenuOpen(true);
    setSelectedItem(item);
  };

  const menuItems = [
    {
      label: 'HTML',
      href: '#html',
    },
    {
      label: 'CSS',
      href: '#css',
    },
    {
      label: 'JS/TS',
      href: '#js-ts',
    },
    {
      label: 'React',
      href: '#react',
    },
  ];

  return (
    <>
      <nav className="main-navbar">
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
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="navbar-button"
                onClick={() => handleSubMenuOpen(item.label)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isSubMenuOpen && (
        <SubMenus
          selectedItem={selectedItem}
          setIsSubMenuOpen={setIsSubMenuOpen}
        />
      )}
    </>
  );
};

export default Navbar;
