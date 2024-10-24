import { createContext, useEffect, useState } from "react";
import Kanban from "./components/kanban/Kanban";
import { arrays, images } from "./icons/data";

export const dataContext = createContext({
  tickets: [],
  users: [],
  arrays: {},
  images: {},
});

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((obj) => setData(obj));
  }, []);

  //creating array of usernames to display on headers
  if (data) arrays.user = data.users.map((usr) => usr.name);

  return (
    <>
      {data && (
        <dataContext.Provider
          value={{
            tickets: data.tickets,
            users: data.users,
            arrays: arrays,
            images: images,
          }}
        >
          <Kanban />
        </dataContext.Provider>
      )}
    </>
  );
};

export default App;
