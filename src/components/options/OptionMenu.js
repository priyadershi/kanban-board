import { useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./options.css";
import { dataContext } from "../../App";

const OptionMenu = ({
  isVisible,
  setIsVisible,
  options,
  setShowRename,
  setShowRemove,
}) => {
  const { images } = useContext(dataContext);

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

  const handleClick = (optionName) => {
    if (optionName === "Rename Column") {
      setShowRename(true);
    } else if (optionName === "Remove Column") {
      setShowRemove(true);
    }
  };

  return (
    <div ref={dropdownRef}>
      <CSSTransition
        in={isVisible}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <div className="options-container" ref={clickRef}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setIsVisible(false);
                handleClick(option);
              }}
              className={`optionss`}
            >
              {option}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default OptionMenu;
