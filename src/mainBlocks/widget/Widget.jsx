import PropTypes from "prop-types";

import css from "./Widget.module.css";
import { AiOutlineMessage } from "react-icons/ai";

function Widget({ changeMessageWindow }) {
  return (
    <div
      className={css.widgetContainer}
      onClick={() => changeMessageWindow(true)}
    >
      <AiOutlineMessage size={30} />
    </div>
  );
}

Widget.propTypes = {
  changeMessageWindow: PropTypes.func,
};
export default Widget;
