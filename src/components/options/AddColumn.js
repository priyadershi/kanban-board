import { useContext, useRef, useState } from "react";
import "./options.css";
import { useEffect } from "react";
import { dataContext } from "../../App";

const AddColumn = ({ setIsVisible }) => {
  const clickRef = useRef();
  const dropdownRef = useRef();

  const [input, setInput] = useState("");
  const { setColumns } = useContext(dataContext);

  const handleRename = (e) => {
    e.preventDefault();
    if (input === "") return;
    setColumns((cols) => {
      return [...cols, input];
    });
    setIsVisible(false);
    // alert("column added");
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

    document.addEventListener("mousedown", detectOutsideClick);
    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
    };
  }, []);

  return (
    <form
      onSubmit={handleRename}
      className="rename-container"
      ref={dropdownRef}
    >
      <label>Enter new column name</label>
      <input
        type="text"
        placeholder="enter column name"
        ref={clickRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={"rename-btn"}>
        Add
      </button>
    </form>
  );
};

export default AddColumn;
