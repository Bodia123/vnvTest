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

// eslint-disable-next-line react/prop-types
function BriefModal({ closeWindow, setMessage }) {
  const handleOutsideClick = () => {
    closeWindow(false);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      askSite: event.target.askSite.value,
      goalSite: event.target.goalSite.value,
      targetSite: event.target.targetSite.value,
    };

    const message = `<b>Бриф з сайту</b>\n <b>Чи є сайт?: ${data.askSite}</b>\n <b>Кінцева мета сайту: ${data.goalSite}</b>\n <b>Додаткові цілі: ${data.targetSite}</b>\n`;
    await setMessage(message);

    closeWindow((old) => !old);
    event.target.reset();
  };
  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <div className={css.windowContainer}>
        <div className={css.windowBox}>
          <h2 className={css.title}>Почнімо!</h2>
          <form action="" className={css.form} onSubmit={submitHandler}>
            <div className={css.inputBox}>
              <h3 className={css.title}>Завдання сайту</h3>
              <p className={css.text}>
                Чи є у вас зараз сайт? Що вам подобається і не дуже в ньому?
              </p>
              <input
                type="text"
                name="askSite"
                id="askSite"
                required
                className={css.input}
              />
            </div>
            <div className={css.inputBox}>
              <h3 className={css.title}>Кінцева мета</h3>
              <p className={css.text}>
                Яка кінцева мета вашого сайту (наприклад, прямі продажі, надання
                інформації про компанію, використання як вітрини товарів).
              </p>
              <input
                type="text"
                name="goalSite"
                id="goalSite"
                className={css.input}
                required
              />
            </div>
            <div className={css.inputBox}>
              <h3 className={css.title}>Додаткові цілі</h3>
              <p className={css.text}>
                Якщо є додаткові цілі сайтів, вкажіть їх.
              </p>
              <input
                type="text"
                name="targetSite"
                id="targetSite"
                className={css.input}
              />
            </div>
            <button type="submit" className={css.hideButton}>
              Відправити
            </button>
          </form>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
BriefModal.propTypes = {
  closeWindow: propTypes.func,
  // setMessage: propTypes.func,
};
export default BriefModal;
