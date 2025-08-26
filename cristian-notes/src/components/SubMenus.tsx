const SubMenus = ({
  selectedItem,
  setIsSubMenuOpen,
}: {
  selectedItem: string | null;
  setIsSubMenuOpen: (isOpen: boolean) => void;
}) => {
  const handleSubMenuToggle = (item: string | null) => {
    console.log(item);
    setIsSubMenuOpen(false);
  };
  return (
    <div className="sub-menu">
      <div
        className="sub-menu-item"
        onClick={() => handleSubMenuToggle(selectedItem)}>
        {selectedItem}
      </div>
    </div>
  );
};

export default SubMenus;
