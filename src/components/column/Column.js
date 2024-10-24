import { useContext } from "react";
import Card from "../card/Card";
import Header from "./Header";
import "./column.css";
import { dataContext } from "../../App";

const Column = ({ groupBy, orderBy, colName }) => {
  const { users, arrays, tickets } = useContext(dataContext);

  let selectedTickets = [];
  let user = {};

  if (groupBy === "priority") {
    selectedTickets = tickets.filter(
      (tkt) => arrays.priority[tkt.priority] === colName
    );
  } else if (groupBy === "user") {
    user = users.find((usr) => usr.name === colName);
    selectedTickets = tickets.filter((tkt) => tkt.userId === user.id);
  } else if (tickets) {
    selectedTickets = tickets.filter(
      (tkt) => tkt[groupBy].toLowerCase() === colName.toLowerCase()
    );
  }
  selectedTickets.sort((a, b) => a[orderBy] - b[orderBy]);

  return (
    <>
      {
        <div className="column-container">
          <Header name={colName} userId={user.id} />
          <div className="card-section">
            {selectedTickets.map((ticket) => (
              <Card ticket={ticket} groupBy={groupBy} key={ticket.id} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Column;
