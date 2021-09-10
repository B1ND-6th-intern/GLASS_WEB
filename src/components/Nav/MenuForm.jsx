import "./MenuForm.css";

const MenuForm = ({ menuIsClcik, toggleMenuClick }) => {
  const MenuItems = [];
  return (
    <>
      {menuIsClcik && (
        <div className="MenuForm-container">
          {MenuItems.map((item, index) => (
            <div key={index} className="menuItem-item-wrap">
              <div className="menuItem-item">{item.item}</div>
              <h5 className="menuItem-name">{item.name}</h5>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuForm;
