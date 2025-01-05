import { useContext, useEffect, useState } from "react";
import Column from "../column/Column";
import Display from "../display/Display";
import "./kanban.css";
import { dataContext } from "../../App";
import AddColumn from "../options/AddColumn";

const Kanban = () => {
  const { columns } = useContext(dataContext);

  let columnNames = columns;

  const [showAddColumn, setShowAddColumn] = useState(false);

  return (
    <>
      {
        <div className="container">
          <div className="header-section">
            {/* <Display /> */}
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
              <Column key={name} colName={name} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Kanban;
