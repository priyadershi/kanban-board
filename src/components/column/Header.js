import { useContext } from "react";
import User from "../card/User";
import "./column.css";
import { dataContext } from "../../App";

const Header = ({ name, userId }) => {
  const { images } = useContext(dataContext);
  return (
    <>
      <div className="header-container flex-sc">
        <div className="header flex-lc">
          {userId ? (
            <User userId={userId} />
          ) : (
            <img src={images[name]} alt={name} className="header-icon" />
          )}
          <div className="header-name">{name}</div>
        </div>
        <div className="options">
          <img src={images.add} className="add" alt="plus" />
          <img src={images.threeDot} className="three-dot" alt="three-dot" />
        </div>
      </div>
    </>
  );
};

export default Header;
