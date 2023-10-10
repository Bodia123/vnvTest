import PropTypes from "prop-types";
import css from "./ConnectType.module.css";
import { FaViber } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";

function ConnectTypeList({ setType, iconSize = 30 }) {
  const itemHandler = (type) => {
    setType(type);
  };
  return (
    <div className={css.selectConnectTypeBox}>
      <p className={css.title}>Оберіть куди звернутись!</p>
      <ul className={css.list}>
        <li className={css.item} onClick={() => itemHandler("number")}>
          <FaMobileRetro size={iconSize} />
        </li>
        <li className={css.item} onClick={() => itemHandler("viber")}>
          <FaViber size={iconSize} />
        </li>
        <li className={css.item} onClick={() => itemHandler("whatsApp")}>
          <ImWhatsapp size={iconSize} />
        </li>
        <li className={css.item} onClick={() => itemHandler("email")}>
          <MdEmail size={iconSize} />
        </li>
        <li className={css.item} onClick={() => itemHandler("telegram")}>
          <BsTelegram size={iconSize} />
        </li>
      </ul>
    </div>
  );
}
ConnectTypeList.propTypes = {
  setType: PropTypes.func,
  iconSize: PropTypes.number,
};
export default ConnectTypeList;
