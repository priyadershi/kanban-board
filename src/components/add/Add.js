import { useContext, useEffect, useState } from "react";
import "./add.css";
import { dataContext } from "../../App";

const Add = ({ setIsVisible, colName }) => {
  const initialInput = {
    userId: "usr-1",
    priority: 0,
    status: "Backlog",
  };
  const [input, setInput] = useState(initialInput);
  const { setTickets, tickets, users } = useContext(dataContext);

  const handleChange = (e) => {
    setInput((ip) => {
      return { ...ip, [e.target.name]: e.target.value };
    });
  };

  const handleAddTask = () => {
    const ticketId = "CAM-" + (tickets.length + 1);

    setTickets((tkt) => {
      return [
        ...tkt,
        { ...input, id: ticketId, tag: "feature request", column: colName },
      ];
    });
    console.log(input, tickets);
    setIsVisible(false);
  };

  return (
    <div class="add-container">
      <div class="add-window">
        <form>
          <label>User Id</label>
          <select name="userId" className="select" onChange={handleChange}>
            {users.map((usr) => (
              <option value={usr.id} key={usr.id}>
                {usr.id + `(${usr.name})`}
              </option>
            ))}
          </select>
          <label>Due Date</label>
          <input type="date" name="due-date" onChange={handleChange} />
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} />
          <label>priority</label>
          <select name="priority" className="select" onChange={handleChange}>
            <option value={0}>no priority</option>
            <option value={1}>low</option>
            <option value={2}>medium</option>
            <option value={3}>high</option>
            <option value={4}>urgent</option>
          </select>
          <label>status</label>
          <select name="status" className="select" onChange={handleChange}>
            <option value="Backlog">Backlog</option>
            <option value="Todo">Todo</option>
            <option value="In progress">In-Progress</option>
            <option value="Done">Done</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <br />
          <button
            type="button"
            class="cancel"
            onClick={() => setIsVisible(false)}
          >
            cancel
          </button>
          <button type="button" class="add-button" onClick={handleAddTask}>
            add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;

// {
//   "id": "CAM-1",
//   "title": "Update User Profile Page UI",
//   "tag": [
//       "Feature request"
//   ],
//   "userId": "usr-1",
//   "status": "Todo",
//   "priority": 4
// }
