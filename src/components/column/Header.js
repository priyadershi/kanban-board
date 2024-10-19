import { Data, images } from "../../icons/images";
import User from "../card/User";
import "./column.css";

const Header = ({ name, isUser }) => {
  //if
  let user = {};
  if (isUser) user = Data.users.find((usr) => usr.name === name);

  return (
    <>
      <div className="header-container flex-sc">
        <div className="header flex-lc">
          {isUser ? (
            <User userId={user.id} />
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
