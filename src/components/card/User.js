import data from "../../data.json";
import { BiSolidUser } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import "./card.css";

const User = ({ userId }) => {
  const allUsers = data.users;
  const user = allUsers.find((usr) => usr.id === userId);

  return (
    <div className="user-container flex-cc">
      <div className="user-icon flex-cc">
        <BiSolidUser />
      </div>
      <div
        className={
          user.available
            ? "badge-icon flex-cc active"
            : "badge-icon flex-cc in-active"
        }
      >
        <span className="flex-cc">
          <GoDotFill />
        </span>
      </div>
    </div>
  );
};

export default User;
