import PropTypes from "prop-types";
import css from "./Logo.module.css";
import logoImg from "../../assets/vnvLogo.png";
function Logo({ width, src = "#" }) {
  return (
    <div className={css.logoContainer}>
      <a href={src} className={css.logoLink} style={{ width: `${width}px` }}>
        <img
          src={logoImg}
          alt="logo image"
          width={width}
          className={css.logoImage}
        />
      </a>
    </div>
  );
}

Logo.propTypes = {
  width: PropTypes.number,
  src: PropTypes.string,
};

export default Logo;
