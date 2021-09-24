import "./MenuForm.css";
import useControllButton from "../../Hooks/Nav/Buttons/useControllButton";

const MenuForm = () => {
  const MenuItems = [];
  const { buttonStates } = useControllButton();

  return (
    <>
      {buttonStates.isMenuClick && (
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
