// import getNotesData from '../firebase/services';
import {subMenuItems} from '../utils/data';
import {useHTMLDataStore} from '../store/useHTMLDataStore';
import useSelectedCategory from '../store/useSelectedCategory';
const SubMenus = ({
  selectedItem,
  setIsSubMenuOpen,
}: {
  selectedItem: string | null;
  setIsSubMenuOpen: (isOpen: boolean) => void;
}) => {
  const {setSubCategory} = useSelectedCategory();
  const {getHTMLData} = useHTMLDataStore();
  const handleSubMenuToggle = async (value: string) => {
    setIsSubMenuOpen(false);
    getHTMLData();
    setSubCategory(value);
  };

  const items = subMenuItems(selectedItem || '');
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
