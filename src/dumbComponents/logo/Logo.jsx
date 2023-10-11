import PropTypes from "prop-types";
import css from "./Logo.module.css";
import logoImg from "../../assets/vnvLogo.png";
function Logo({ width, src = "#", background }) {
  return (
    <div
      className={css.logoContainer}
      style={{ backgroundColor: `${background}`, borderRadius: "50%" }}
    >
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
  background: PropTypes.string,
};

export default Logo;
