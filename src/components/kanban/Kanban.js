import { useContext, useEffect, useState } from "react";
import Column from "../column/Column";
import Display from "../display/Display";
import "./kanban.css";
import { dataContext } from "../../App";
import AddColumn from "../options/AddColumn";

const Kanban = () => {
  // const initGroup = localStorage.getItem("group");
  const initOrder = localStorage.getItem("order");

  // const [group, setGroup] = useState(initGroup || "status");
  const [order, setOrder] = useState(initOrder || "priority");

  const { columns } = useContext(dataContext);

  // let groupNames = arrays[group];
  let columnNames = columns;

  useEffect(() => {
    // localStorage.setItem("group", group);
    localStorage.getItem("order", order);
  }, [order]);

  const [showAddColumn, setShowAddColumn] = useState(false);

  return (
    <>
      {
        <div className="container">
          <div className="header-section">
            <Display
              // setGroup={setGroup}
              setOrder={setOrder}
            />
            <button
              className="add-column"
              onClick={() => setShowAddColumn(true)}
            >
              add new column
            </button>
            {showAddColumn && <AddColumn setIsVisible={setShowAddColumn} />}
          </div>
          <div className="main-section">
            {columnNames.map((name) => (
              <Column
                key={name}
                // groupBy={group}
                orderBy={order}
                colName={name}
              />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Kanban;
