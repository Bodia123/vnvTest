import css from "./Slecial.module.css";
import propTypes from "prop-types";
function SpecialElement({ text }) {
  return <span className={css.text}>{text}</span>;
}
SpecialElement.propTypes = {
  text: propTypes.string,
};
export default SpecialElement;
