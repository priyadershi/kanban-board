import { useContext, useRef } from "react";
import "./options.css";
import { useEffect } from "react";
import { dataContext } from "../../App";

const Rename = ({ name, setIsVisible }) => {
  const clickRef = useRef();
  const dropdownRef = useRef();
  const { columns, setColumns, tickets, setTickets } = useContext(dataContext);

  const handleRename = (e) => {
    e.preventDefault();
    const newName = clickRef.current.value;
    console.log(newName);
    if (name !== newName && columns.find((col) => col === newName)) {
      alert("Column with same name already exist");
      return;
    }

    const updatedList = columns.map((col) => (col === name ? newName : col));
    setColumns(updatedList);
    const updatedTickets = tickets.map((tkt) =>
      tkt.column === name ? { ...tkt, column: newName } : tkt
    );
    setTickets(updatedTickets);
    console.log(updatedTickets);
    setIsVisible(false);
  };

  useEffect(() => {
    const detectOutsideClick = (event) => {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };
    clickRef.current.value = name;

    document.addEventListener("mousedown", detectOutsideClick);
    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
    };
  }, []);

  return (
    <form
      className="rename-container"
      ref={dropdownRef}
      onSubmit={handleRename}
    >
      <label>enter new name</label>
      <input type="text" ref={clickRef} />
      <button type="submit" className={"rename-btn"}>
        rename
      </button>
    </form>
  );
};

export default Rename;
