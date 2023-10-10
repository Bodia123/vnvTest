import { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import propTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const OutsideClickHandler = ({ children, onOutsideClick }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={wrapperRef} className={css.mainBriefModalContainer}>
      {children}
    </div>
  );
};

function BriefModal({ closeWindow }) {
  const handleOutsideClick = () => {
    closeWindow(false);
  };
  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <div className={css.windowContainer}>
        <div className={css.windowBox}>
          <h2 className={css.title}>Почнімо!</h2>
          <p className={css.text}>
            Зверніться, щоб отримати знижку на перше замовлення!
          </p>

          <button
            className={css.hideButton}
            onClick={() => closeWindow((old) => !old)}
          >
            kek
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
BriefModal.propTypes = {
  closeWindow: propTypes.func,
};
export default BriefModal;
