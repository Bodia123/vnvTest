import PropTypes from "prop-types";
import css from "./Title.module.css";
function TitleComponent({ text, marginTop = 20, fontSize = 20 }) {
  return (
    <div
      className={css.titleContainer}
      style={{ marginTop: `${marginTop}px`, fontSize: `${fontSize}px` }}
    >
      <h3 className={css.title}>{text}</h3>
    </div>
  );
}

TitleComponent.propTypes = {
  text: PropTypes.string,
  marginTop: PropTypes.number,
  fontSize: PropTypes.number,
};

export default TitleComponent;
