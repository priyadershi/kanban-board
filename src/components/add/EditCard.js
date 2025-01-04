import { useState } from "react";
import "./add.css";

const EditCard = ({ ticket, setIsVisible }) => {
  const [tkt, setTkt] = useState(ticket);

  const onChange = (e) => {
    setTkt((t) => {
      return { ...t, [e.target.name]: e.target.value };
    });
  };

  const handleSave = () => {
    console.log("saved");

    setIsVisible(false);
  };

  return (
    <div className="edit-container">
      <div className="edit-window">
        <form>
          <label>Ticket Id</label>
          <input type="text" value={tkt.id} name="id" onChange={onChange} />
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
