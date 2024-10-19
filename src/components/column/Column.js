import { Data } from "../../icons/images";
import Card from "../card/Card";
import Header from "./Header";
import "./column.css";

const Column = ({ groupBy, groupVal, orderBy, tkts }) => {
  let tickets = [];
  if (tkts) {
    tickets = tkts.filter((tkt) => tkt[groupBy] === groupVal);
    tickets.sort((a, b) => a[orderBy] - b[orderBy]);
  }
  return (
    <>
      {
        <div className="column-container">
          <Header name={groupVal} isUser={groupBy === "user"} />
          <div className="card-section">
            {tickets.map((ticket) => (
              <Card ticket={ticket} key={ticket.id} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Column;
