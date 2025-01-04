import { BiSolidUser } from "react-icons/bi";
// import { GoDotFill } from "react-icons/go";
import "./card.css";
import { useContext } from "react";
import { dataContext } from "../../App";

const User = ({ userId }) => {
  const { users } = useContext(dataContext);
  const user = users.find((usr) => usr.id === userId);

  return (
    <div className="user-window">
      <div className="user-container">
        <BiSolidUser />
        <div
          className={`badge-icon ${user.available ? "active" : "in-active"}`}
        ></div>
      </div>
      <span>{userId}</span>
    </div>
  );
};

export default User;
