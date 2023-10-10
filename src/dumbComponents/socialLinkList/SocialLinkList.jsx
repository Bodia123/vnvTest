import PropTypes from "prop-types";

import css from "./List.module.css";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaViber } from "react-icons/fa";

function SocialLinkList({ iconSize = 30, color = "inherit" }) {
  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        <li className={css.item}>
          <a
            href="https://t.me/@zinovkinB"
            rel="noreferrer"
            target="_blank"
            className={css.link}
            style={{ color: `${color}` }}
          >
            <BsTelegram size={iconSize} />
          </a>
        </li>
        <li className={css.item}>
          <a
            href="https://www.linkedin.com/in/zinovkin/"
            rel="noreferrer"
            target="_blank"
            className={css.link}
            style={{ color: `${color}` }}
          >
            <BsLinkedin size={iconSize} />
          </a>
        </li>
        <li className={css.item}>
          <a href="#" className={css.link} style={{ color: `${color}` }}>
            <BsFacebook size={iconSize} />
          </a>
        </li>
        <li className={css.item}>
          <a
            href="https://www.instagram.com/bodianchik_"
            rel="noreferrer"
            target="_blank"
            className={css.link}
            style={{ color: `${color}` }}
          >
            <BsInstagram size={iconSize} />
          </a>
        </li>
        <li className={css.item}>
          <a
            href="viber://chat?number=%2B380685817680"
            className={css.link}
            style={{ color: `${color}` }}
          >
            <FaViber size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="mailto:bogdan.zinovkin.work@gmail.com"
            className={css.link}
            style={{ color: `${color}` }}
          >
            <MdEmail size={iconSize} />
          </a>
        </li>
      </ul>
    </div>
  );
}
SocialLinkList.propTypes = {
  iconSize: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};
export default SocialLinkList;
