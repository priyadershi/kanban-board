import "./add.css";

const Add = ({ setIsVisible }) => {
  const handleAddTask = () => {
    console.log("handle add");
  };

  return (
    <div class="add-container">
      <div class="add-window">
        <form>
          <label>User Id</label>
          <input type="text" />
          <label>User Name:</label>
          <input type="text" />
          <label>Title</label>
          <input type="text" />
          <label>priority</label>
          <select>
            <option value={0}>no priority</option>
            <option value={1}>low</option>
            <option value={2}>medium</option>
            <option value={3}>high</option>
            <option value={4}>urgent</option>
          </select>
          <label>status</label>
          <select>
            <option value="backlog">Backlog</option>
            <option value="todo">Todo</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
            <option value="cancelled">Cancelled</option>
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
