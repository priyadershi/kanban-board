import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./dropdown.css";
import { images } from "../../icons/data";

const Dropdown = ({ setState, options, type }) => {
  const intialVal =
    localStorage.getItem(type) || (type === "group" ? "status" : "title");

  const [selected, setSelected] = useState(intialVal);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className="dropdown-container"
        onClick={() => setIsVisible(!isVisible)}
      >
        {selected}
        <img src={images.down} />
      </div>

      <CSSTransition
        in={isVisible}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <div className="option-container">
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsVisible(false);
                setState(option.toLowerCase());
              }}
              className={`option ${selected === option && "selected"}`}
            >
              {option}
            </div>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default Dropdown;
