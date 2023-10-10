import propTypes from "prop-types";
import css from "./Social.module.css";
import { FaInstalod } from "react-icons/fa";
function SocialItem({
  icon = <FaInstalod />,
  color = "inherit",
  title = "Соціальна мережа",
}) {
  return (
    <div
      style={{
        color: `${color}`,
      }}
      className={css.container}
    >
      <p className={css.title}>{title}</p>
      {icon}
    </div>
  );
}
SocialItem.propTypes = {
  icon: propTypes.object,
  color: propTypes.string,
  title: propTypes.string,
};
export default SocialItem;
