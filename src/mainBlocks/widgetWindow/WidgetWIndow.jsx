import PropTypes from "prop-types";
import { BiSolidDownArrow } from "react-icons/bi";

import css from "./Window.module.css";
import { useEffect, useRef } from "react";
import SocialLinkList from "../../dumbComponents/socialLinkList/SocialLinkList";

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

  return <div ref={wrapperRef}>{children}</div>;
};

function WidgetWIndow({ closeWindow }) {
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

          <SocialLinkList iconSize={30} />
          <button
            className={css.hideButton}
            onClick={() => closeWindow((old) => !old)}
          >
            <BiSolidDownArrow />
          </button>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
WidgetWIndow.propTypes = {
  closeWindow: PropTypes.func,
};
export default WidgetWIndow;
