import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import propTypes from "prop-types";
import css from "./Accordion.module.css";
const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  let toggleHandler = () => {
    setOpen(!open);
  };

  const styles = {
    accordionTitle: {
      color: "#fff",
    },
  };

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "400px" : "50px" },
    config: { duration: "300" },
  });

  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    },
    config: { duration: "50" },
  });

  return (
    <animated.div
      className={css.item}
      style={openAnimation}
      onClick={toggleHandler}
    >
      <div className={css.header}>
        <h4 style={styles.accordionTitle}>{title}</h4>
        <animated.i style={iconAnimation}>
          <BsFillArrowUpCircleFill size={30} />
        </animated.i>
      </div>
      <p className={css.content}>{text}</p>
    </animated.div>
  );
};
Accordion.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};
export default Accordion;
