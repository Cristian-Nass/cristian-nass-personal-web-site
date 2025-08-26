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
      id: 1,
      label: 'HTML',
    },
    {
      id: 2,
      label: 'CSS',
    },
    {
      id: 3,
      label: 'JS/TS',
    },
    {
      id: 4,
      label: 'React',
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
            <li
              key={item.label}
              className="navbar-button"
              onClick={() => handleSubMenuOpen(item.label)}>
              {item.label}
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
