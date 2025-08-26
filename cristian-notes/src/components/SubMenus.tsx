import {subMenuItems} from '../utils/data';

const SubMenus = ({
  selectedItem,
  setIsSubMenuOpen,
}: {
  selectedItem: string | null;
  setIsSubMenuOpen: (isOpen: boolean) => void;
}) => {
  const handleSubMenuToggle = (item: string) => {
    console.log(item);
    setIsSubMenuOpen(false);
  };

  const items = subMenuItems(selectedItem || '');
  console.log(items);
  return (
    <div className="sub-menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="sub-menu-item"
          onClick={() => handleSubMenuToggle(item.value)}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SubMenus;
