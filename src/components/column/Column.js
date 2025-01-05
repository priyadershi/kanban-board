import { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import Header from "./Header";
import "./column.css";
import { dataContext } from "../../App";

const Column = ({ colName }) => {
  const { users, arrays, tickets, setTickets, active, orderBy } =
    useContext(dataContext);
  const [selectedTickets, setSelectedTickets] = useState([]);

  let user = {};

  useEffect(() => {
    console.log("order changed");
    const tks = tickets.filter((tkt) => tkt.column === colName);
    setSelectedTickets(tks.sort((a, b) => a[orderBy] - b[orderBy]));
    console.log(selectedTickets);
  }, [orderBy, tickets]);

  const handleDrop = (colName) => {
    if (colName === active.column) return;
    const selectedTkt = active;
    selectedTkt.column = colName;
    const newList = tickets.filter((tkt) => tkt.id !== active.id);
    newList.push(selectedTkt);
    setTickets(newList);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {
        <div
          className="column-container"
          onDrop={() => handleDrop(colName)}
          onDragOver={handleDragOver}
        >
          <Header name={colName} userId={user.id} />
          <div className="card-section">
            {selectedTickets.map((ticket) => (
              <Card ticket={ticket} key={ticket.id} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Column;
