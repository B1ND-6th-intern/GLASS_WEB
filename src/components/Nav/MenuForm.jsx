import "./MenuForm.css";
import DarkMode from "../Nav/MenuItem/DarkMode";
import SerViceCenter from "./MenuItem/ServiceCenter";

const MenuForm = ({ menuIsClcik }) => {
  const MenuItems = [
    { item: <DarkMode />, name: "다크모드" },
    { item: <SerViceCenter />, name: "고객센터" },
  ];
  return (
    <>
      {menuIsClcik ? (
        <div className="MenuForm-container">
          {MenuItems.map((item, index) => (
            <div key={index} className="menuItem-item-wrap">
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
