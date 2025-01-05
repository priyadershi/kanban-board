import { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import Header from "./Header";
import "./column.css";
import { dataContext } from "../../App";

const Column = ({ orderBy, colName }) => {
  const { users, arrays, tickets, setTickets, active } =
    useContext(dataContext);

  let selectedTickets = [];
  let user = {};

  // if (groupBy === "priority") {
  //   selectedTickets = tickets.filter(
  //     (tkt) => arrays.priority[tkt.priority] === colName
  //   );
  // } else if (groupBy === "user") {
  //   user = users.find((usr) => usr.name === colName);
  //   selectedTickets = tickets.filter((tkt) => tkt.userId === user.id);
  // } else if (tickets) {
  //   selectedTickets = tickets.filter(
  //     (tkt) => tkt[groupBy].toLowerCase() === colName.toLowerCase()
  //   );
  // }

  selectedTickets = tickets.filter((tkt) => tkt.column === colName);

  selectedTickets.sort((a, b) => a[orderBy] - b[orderBy]);

  const handleDrop = (colName) => {
    if (colName === active.column) return;
    const selectedTkt = active;
    selectedTkt.column = colName;
    const newList = tickets.filter((tkt) => tkt.id !== active.id);
    newList.push(selectedTkt);
    setTickets(newList);
    // console.log(active);
    // console.log("handle drop", colName, active.column);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("drop over");
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
