import { useRef } from "react";
import "./options.css";
import { useEffect } from "react";

const Rename = ({ setIsVisible }) => {
  const clickRef = useRef();
  const dropdownRef = useRef();

  const handleRename = () => {
    console.log("renamed");

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

    document.addEventListener("mousedown", detectOutsideClick);
    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
    };
  }, []);

  return (
    <div className="rename-container" ref={dropdownRef}>
      <label>enter new name</label>
      <input type="text" ref={clickRef} />
      <button onClick={handleRename} className={"rename-btn"}>
        rename
      </button>
    </div>
  );
};

export default Rename;
