import { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./dropdown.css";
import { dataContext } from "../../App";

const Dropdown = ({ setState, options, type }) => {
  const { images } = useContext(dataContext);

  const intialVal =
    localStorage.getItem(type) || (type === "group" ? "status" : "title");

  const [selected, setSelected] = useState(intialVal);
  const [isVisible, setIsVisible] = useState(false);
  const clickRef = useRef();
  const dropdownRef = useRef();

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
    <>
      <div
        className="dropdown-container"
        onClick={() => setIsVisible(!isVisible)}
        ref={dropdownRef}
      >
        {selected}
        <img
          src={images.down}
          alt="down logo"
          className={`down-arrow ${isVisible && "rotate"}`}
        />
      </div>

      <CSSTransition
        in={isVisible}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <div className="option-container" ref={clickRef}>
          {options.map((option) => (
            <div
              key={option}
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
