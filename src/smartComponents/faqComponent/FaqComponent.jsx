import css from "./FaqComponent.module.css";
import PropTypes from "prop-types";

import Accordion from "../../dumbComponents/accordion/Accordion";
function FaqComponent({ faqEl }) {
  return (
    <div className={css.faqContainer}>
      <Accordion text={faqEl.answer} title={faqEl.question}></Accordion>
    </div>
  );
}
FaqComponent.propTypes = {
  faqEl: PropTypes.object,
};
export default FaqComponent;
