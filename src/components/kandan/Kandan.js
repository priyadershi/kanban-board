import { useEffect, useState } from "react";
import { arrays, Data } from "../../icons/images";
import Column from "../column/Column";
import Display from "../display/Display";
import "./kandan.css";
const Kandan = () => {
  const [group, setGroup] = useState("status");
  const [order, setOrder] = useState("priority");

  let groupNames = arrays[group];
  let tickets = Data.tickets;

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
                groupVal={name}
                groupBy={group}
                orderBy={order}
                tkts={tickets}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Kandan;
