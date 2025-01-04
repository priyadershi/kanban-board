import { useContext, useState } from "react";
import "../add/add.css";
import { dataContext } from "../../App";

const Remove = ({ colName, setIsVisible }) => {
  const { columns, setColumns, tickets, setTickets } = useContext(dataContext);

  const handleDelete = () => {
    const restColumns = columns.filter((col) => col !== colName);
    setColumns(restColumns);
    const restTickets = tickets.filter((tkt) => tkt.column !== colName);
    setTickets(restTickets);
    setIsVisible(false);
  };

  return (
    <div className="edit-container">
      <div className="edit-window">
        <center>
          <big>Do you want to Delete {`"${colName}"`}</big> <br />
          <small>All the Tasks of this column will also be deleted</small>
          <br />
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="add-button"
          >
            cancel
          </button>
          <button type="sumbit" onClick={handleDelete} className="cancel">
            Remove
          </button>
        </center>
      </div>
    </div>
  );
};

export default Remove;
