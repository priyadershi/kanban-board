import "./card.css";
import User from "./User";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { dataContext } from "../../App";

const Card = ({ ticket, groupBy }) => {
  const { images } = useContext(dataContext);
  return (
    <div className="card-container">
      <div className="first-row flex-sc">
        <p className="card-id">{ticket.id}</p>
        {groupBy !== "user" && <User userId={ticket.userId} />}
      </div>
      <div className="second-row flex-ls">
        {groupBy !== "status" && (
          <div className="status-icon-div flex-cc">
            <img
              src={images[ticket.status]}
              className="status-icon"
              alt="status"
            />
          </div>
        )}
        <div className="title-div">{ticket.title}</div>
      </div>
      <div className="third-row flex-lc">
        {groupBy !== "priority" && (
          <div className="priority-icon flex-cc">
            <img src={images[ticket.priority]} alt="priority" />
          </div>
        )}

        <div className="tag flex-lc">
          <span className="feature-dot flex-cc">
            <GoDotFill />
          </span>
          <p>{ticket.tag} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
