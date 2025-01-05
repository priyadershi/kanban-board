import { createContext, useEffect, useState } from "react";
import Kanban from "./components/kanban/Kanban";
import { arrays, images } from "./icons/data";
import initialData from "./data.json";

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
});

const columnNames = [
  "column-1",
  "column-2",
  "column-3",
  "column-4",
  "column-5",
  "column-6",
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [tickets, setTickets] = useState(data.tickets);
  const [columns, setColumns] = useState(columnNames);
  const [active, setActive] = useState({});

  //creating array of usernames to display on headers
  if (data) arrays.user = data.users.map((usr) => usr.name);

  return (
    <>
      {data ? (
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
          }}
        >
          <Kanban />
        </dataContext.Provider>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default App;