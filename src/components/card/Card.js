import "./card.css";
import User from "./User";
import { images } from "../../icons/data";
import { GoDotFill } from "react-icons/go";

const Card = ({ ticket }) => {
  return (
    <div className="card-container">
      <div className="first-row flex-sc">
        <p className="card-id">{ticket.id}</p>
        {ticket.userId && <User userId={ticket.userId} />}
      </div>
      <div className="second-row flex-ls">
        {ticket.status && (
          <div className="status-icon-div flex-cc">
            <img
              src={images[ticket.status]}
              className="status-icon"
              alt="status"
            />
          </div>
        )}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="third-row flex-lc">
        {ticket.priority !== undefined && (
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
