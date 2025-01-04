import { createContext, useEffect, useState } from "react";
import Kanban from "./components/kanban/Kanban";
import { arrays, images } from "./icons/data";
import initialData from "./data.json";

export const dataContext = createContext({
  tickets: [],
  users: [],
  arrays: {},
  images: {},
});

const App = () => {
  const [data, setData] = useState(initialData);
  const [tickets, setTickets] = useState(data.tickets);

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
