import propTypes from "prop-types";
import { Link } from "react-scroll";
function ButtonLink({ text = "Замовити!", to = "connectContainer" }) {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
      delay={50}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
    >
      {text}
    </Link>
  );
}
ButtonLink.propTypes = {
  text: propTypes.string,
  to: propTypes.string,
};

export default ButtonLink;
