import "./card.css";
import User from "./User";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { dataContext } from "../../App";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import EditCard from "../add/EditCard";

const Card = ({ ticket }) => {
  const { images, tickets, setTickets, setActive } = useContext(dataContext);

  const handleDelete = (id) => {
    const updatedTickets = tickets.filter((tkt) => tkt.id !== id);
    setTickets(updatedTickets);
  };

  const [showEdit, setShowEdit] = useState(false);
  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDragStart = (e, tkt) => {
    setActive(tkt);
    e.target.style.opacity = "0.4";
  };
  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setActive({});
  };

  return (
    <div
      className="card-container"
      draggable
      onDragStart={(e) => handleDragStart(e, ticket)}
      onDragEnd={handleDragEnd}
    >
      <div className="first-row flex-sc">
        <p className="card-id">{ticket.id}</p>
        {<User userId={ticket.userId} />}
      </div>
      <div className="second-row flex-ls">
        {
          <div className="status-icon-div flex-cc">
            <img
              src={images[ticket.status]}
              className="status-icon"
              alt="status"
            />
          </div>
        }
        <div className="title-div">{ticket.title}</div>
      </div>
      <div className="third-row flex-lc">
        {
          <div className="priority-icon flex-cc">
            <img src={images[ticket.priority]} alt="priority" />
          </div>
        }

        <div className="tag flex-lc">
          <span className="feature-dot flex-cc">
            <GoDotFill />
          </span>
          <p>{ticket.tag} </p>
        </div>
        <div className="edit-icon" onClick={() => handleEdit(ticket.id)}>
          <MdEdit />
        </div>
        {showEdit && <EditCard ticket={ticket} setIsVisible={setShowEdit} />}
        <div className="bin-icon" onClick={() => handleDelete(ticket.id)}>
          <MdDeleteForever />
        </div>
      </div>
    </div>
  );
};

export default Card;
