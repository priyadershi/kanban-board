import { createContext, useEffect, useState } from "react";
import Kanban from "./components/kanban/Kanban";
import { arrays, images } from "./icons/data";
import initialData from "./data.json";
import { useAuth0 } from "@auth0/auth0-react";

export const dataContext = createContext({
  tickets: [],
  users: [],
  arrays: {},
  images: {},
  setColumns: () => {},
  columns: [],
  setTickets: () => {},
  active: {},
  setActive: () => {},
  setOrderBy: () => {},
});

const columnNames = [
  "column-1",
  "column-2",
  "column-3",
  "column-4",
  "column-5",
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [tickets, setTickets] = useState(data.tickets);
  const [columns, setColumns] = useState(columnNames);
  const [active, setActive] = useState({});
  const [orderBy, setOrderBy] = useState("title");

  //creating array of usernames to display on headers
  if (data) arrays.user = data.users.map((usr) => usr.name);

  const { user, loginWithRedirect } = useAuth0();

  return (
    <>
      {user ? (
        <dataContext.Provider
          value={{
            tickets: tickets,
            users: data.users,
            arrays: arrays,
            images: images,
            setTickets: setTickets,
            columns: columns,
            setColumns: setColumns,
            active: active,
            setActive: setActive,
            orderBy: orderBy,
            setOrderBy: setOrderBy,
          }}
        >
          <Kanban />
        </dataContext.Provider>
      ) : (
        <button onClick={() => loginWithRedirect()} className="login-register">
          Click Here to Login/Register
        </button>
      )}
    </>
  );
};

export default App;
