import { useEffect, useState } from "react";
import { arrays, Data } from "../../icons/data";
import Column from "../column/Column";
import Display from "../display/Display";
import "./kanban.css";

const Kanban = () => {
  const initGroup = localStorage.getItem("group");
  const initOrder = localStorage.getItem("order");

  const [group, setGroup] = useState(initGroup || "status");
  const [order, setOrder] = useState(initOrder || "priority");

  let groupNames = arrays[group];
  let tickets = Data.tickets;

  useEffect(() => {
    localStorage.setItem("group", group);
    localStorage.getItem("order", order);
  }, [group, order]);

  return (
    <>
      {
        <div className="container">
          <div className="header-section">
            <Display setGroup={setGroup} setOrder={setOrder} />
          </div>
          <div className="main-section flex-ss">
            {groupNames.map((name) => (
              <Column
                key={name}
                groupBy={group}
                orderBy={order}
                colName={name}
                allTickets={tickets}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Kanban;
