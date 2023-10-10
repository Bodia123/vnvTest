import { useEffect, useState } from "react";
import css from "./FaqComponent.module.css";
import PropTypes from "prop-types";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
function FaqComponent({ faqEl }) {
  const [isOpen, setIsOpen] = useState(false);

  // css.faqContainer
  return (
    //   <div className={isOpen ? css.faqContainer : css.closeContainer}>
    <div className={css.faqContainer} onClick={() => setIsOpen((old) => !old)}>
      <div className={css.questionElement}>
        <p className={css.questionText}>{faqEl.question}</p>
        <span>
          {isOpen ? (
            <BsFillArrowUpCircleFill size={30} />
          ) : (
            <BsFillArrowDownCircleFill size={30} />
          )}
        </span>
      </div>
      {isOpen && <div className={css.answerElement}>{faqEl.answer}</div>}
    </div>
  );
}
FaqComponent.propTypes = {
  faqEl: PropTypes.object,
};
export default FaqComponent;
