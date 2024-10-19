import { arrays, Data } from "../../icons/data";
import Card from "../card/Card";
import Header from "./Header";
import "./column.css";

const Column = ({ groupBy, orderBy, colName, allTickets }) => {
  let tickets = [];
  let user = {};

  if (groupBy === "priority") {
    tickets = allTickets.filter(
      (tkt) => arrays.priority[tkt.priority] === colName
    );
  } else if (groupBy === "user") {
    user = Data.users.find((usr) => usr.name === colName);
    tickets = allTickets.filter((tkt) => tkt.userId === user.id);
  } else if (allTickets) {
    tickets = allTickets.filter(
      (tkt) => tkt[groupBy].toLowerCase() === colName.toLowerCase()
    );
  }
  tickets.sort((a, b) => a[orderBy] - b[orderBy]);

  return (
    <>
      {
        <div className="column-container">
          <Header name={colName} userId={user.id} />
          <div className="card-section">
            {tickets.map((ticket) => (
              <Card ticket={ticket} groupBy={groupBy} key={ticket.id} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Column;
