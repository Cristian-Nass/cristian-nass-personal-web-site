// import getNotesData from '../firebase/services';
import {subMenuItems} from '../utils/data';
import {useHTMLData} from '../store/useHTMLData';

const SubMenus = ({
  selectedItem,
  setIsSubMenuOpen,
}: {
  selectedItem: string | null;
  setIsSubMenuOpen: (isOpen: boolean) => void;
}) => {
  const {getHTMLData} = useHTMLData();
  const handleSubMenuToggle = async () => {
    setIsSubMenuOpen(false);
    getHTMLData();
  };

  const items = subMenuItems(selectedItem || '');
  return (
    <div className="sub-menu">
      {items.map((item) => (
        <div
          key={item.id}
          className="sub-menu-item"
          onClick={() => handleSubMenuToggle()}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SubMenus;
