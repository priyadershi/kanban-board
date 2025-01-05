import { useContext, useEffect, useState } from "react";
import Column from "../column/Column";
import Display from "../display/Display";
import "./kanban.css";
import { dataContext } from "../../App";
import AddColumn from "../options/AddColumn";
import { useAuth0 } from "@auth0/auth0-react";

const Kanban = () => {
  const { columns } = useContext(dataContext);

  let columnNames = columns;

  const [showAddColumn, setShowAddColumn] = useState(false);
  const { user, logout } = useAuth0();
  // console.log(user);

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
            <div>
              <span className="user-name">
                Welcome {user.name.split(" ")[0]}
              </span>
              <span className="logout" onClick={(e) => logout()}>
                Logout
              </span>
            </div>
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
