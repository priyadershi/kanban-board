import { useContext, useState } from "react";
import "./add.css";
import { dataContext } from "../../App";

const EditCard = ({ ticket, setIsVisible }) => {
  const [tkt, setTkt] = useState(ticket);
  const { setTickets, tickets } = useContext(dataContext);

  const onChange = (e) => {
    setTkt((t) => {
      return { ...t, [e.target.name]: e.target.value };
    });
  };

  const handleSave = () => {
    const updatedList = tickets.filter((t) => t.id !== ticket.id);
    setTickets([...updatedList, tkt]);
    setIsVisible(false);
  };

  return (
    <div className="edit-container">
      <div className="edit-window">
        <form>
          <label>Task Id</label>
          <input
            type="text"
            value={tkt.id}
            name="id"
            onChange={onChange}
            disabled
          />
          <label>User Id</label>
          <input
            type="text"
            value={tkt.userId}
            name="userId"
            onChange={onChange}
          />
          <label>Title</label>
          <input
            type="text"
            value={tkt.title}
            name="title"
            onChange={onChange}
          />
          <label>priority</label>
          <select name="priority" className="select" onChange={onChange}>
            <option value={0} selected={ticket.priority === 0}>
              no priority
            </option>
            <option value={1} selected={ticket.priority === 1}>
              low
            </option>
            <option value={2} selected={ticket.priority === 2}>
              medium
            </option>
            <option value={3} selected={ticket.priority === 3}>
              high
            </option>
            <option value={4} selected={ticket.priority === 4}>
              urgent
            </option>
          </select>
          <label>status</label>
          <select name="status" className="select" onChange={onChange}>
            <option value="Backlog" selected={ticket.status === "Backlog"}>
              Backlog
            </option>
            <option value="Todo" selected={ticket.status === "Todo"}>
              Todo
            </option>
            <option
              value="In progress"
              selected={ticket.status === "In progress"}
            >
              In-Progress
            </option>
            <option value="Done" selected={ticket.status === "Done"}>
              Done
            </option>
            <option value="Cancelled" selected={ticket.status === "Cancelled"}>
              Cancelled
            </option>
          </select>
          <br />
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="cancel"
          >
            cancel
          </button>
          <button type="button" onClick={handleSave} className="add-button">
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCard;
