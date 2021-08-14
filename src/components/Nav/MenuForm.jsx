import "./MenuForm.css";
import DarkMode from "./MenuItem/DarkMode";

const MenuForm = ({ menuIsClcik }) => {
  const MenuItems = [{ item: <DarkMode />, name: "다크모드" }];
  return (
    <>
      {menuIsClcik ? (
        <div id="MenuForm-container">
          {MenuItems.map((item) => (
            <div className="menuItem-item-wrap">
              <div className="menuItem-item">{item.item}</div>
              <h5 className="menuItem-name">{item.name}</h5>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MenuForm;
