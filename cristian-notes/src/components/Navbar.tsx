import {useState} from 'react';
import SubMenus from './SubMenus';
import useSelectedCategory from '../store/useSelectedCategory';
const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const {setCategory} = useSelectedCategory();
  const handleSubMenuOpen = (item: {label: string; value: string}) => {
    setCategory(item.value);
    setIsSubMenuOpen(true);
    setSelectedItem(item.label);
  };

  const menuItems = [
    {
      id: 1,
      label: 'HTML',
      value: 'html',
    },
    {
      id: 2,
      label: 'CSS',
      value: 'css',
    },
    {
      id: 3,
      label: 'JS/TS',
      value: 'js-ts',
    },
    {
      id: 4,
      label: 'React',
      value: 'react',
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
              onClick={() => handleSubMenuOpen(item)}>
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
