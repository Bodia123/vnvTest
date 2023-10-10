import propTypes from "prop-types";
import css from "./Superiority.module.css";
import { Link } from "react-scroll";
function SuperiorityElement({ icon, title, text }) {
  return (
    <div className={css.container}>
      <div className={css.TitleBox}>
        <div className={css.icon}>{icon}</div>
        <h3 className={css.title}>{title}</h3>
        <Link
          activeClass="active"
          to="connectContainer"
          spy={true}
          smooth={true}
          hashSpy={true}
          duration={500}
          delay={50}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          Замовити!
        </Link>
      </div>
      <p className={css.text}>{text}</p>
    </div>
  );
}
SuperiorityElement.propTypes = {
  icon: propTypes.object,
  title: propTypes.string,
  text: propTypes.string,
};
export default SuperiorityElement;
