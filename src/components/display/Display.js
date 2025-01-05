import { useContext, useEffect, useRef, useState } from "react";
import Filter from "./Filter";
import "./display.css";
import { dataContext } from "../../App";
import { CSSTransition } from "react-transition-group";

const Display = () => {
  const { images } = useContext(dataContext);
  const [isVisible, setIsVisible] = useState(false);
  const clickRef = useRef();
  const displayRef = useRef();

  useEffect(() => {
    const detectOutsideClick = (event) => {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target) &&
        !displayRef.current.contains(event.target)
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
    <div>
      <div
        ref={displayRef}
        className="display-container flex-cc"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="filter-div flex-cc">
          <img src={images.display} alt="filter-logo" className="filter-logo" />
        </div>
        <div className="display-name flex-cc">
          Display
          <img
            src={images.down}
            alt="down-arrow"
            className={`down-arrow ${isVisible && "rotate"}`}
          />
        </div>
      </div>
      <CSSTransition
        in={isVisible}
        classNames="fade"
        timeout={250}
        unmountOnExit
      >
        <div className="filter" ref={clickRef}>
          <Filter />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Display;
