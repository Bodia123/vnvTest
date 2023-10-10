import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "./Service.module.css";
import { serviceInfo } from "../../utils/info";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-scroll";
// ImArrowRight

function ServiceMenuComponent({ countCurrentService }) {
  const [currentService, setCurrentService] = useState(null);
  useEffect(() => {
    setCurrentService(serviceInfo[countCurrentService - 1]);
  }, [countCurrentService]);

  if (!currentService) return;

  return (
    <div className={css.serviceContainer}>
      <h3 className={css.serviceTitle}>{currentService.title}</h3>
      <p className={css.serviceDescription}>{currentService.decription}</p>
      <div className={css.imageContainer}>
        <p className={css.serviceBecause}>Обирайте цей тип, якщо:</p>
        <ul className={css.serviceList}>
          {currentService.image.map((item, index) => (
            <li key={index} className={css.serviceItem}>
              <img
                src={item.image}
                width={30}
                height={30}
                alt={currentService.name}
                className={css.serviceImage}
                loading="lazy"
              />
              <p className={css.serviceText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.buttonControllerBox}>
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
          <p className={css.buttonWantText}>
            Хочу!{" "}
            <span>
              <ImArrowRight color="white" size={24} />
            </span>
          </p>
        </Link>
      </div>
      <div className={css.posterContainer}>
        <img
          src={currentService.poster}
          alt=""
          width={300}
          className={css.posterImage}
        />
      </div>
    </div>
  );
}

ServiceMenuComponent.propTypes = {
  countCurrentService: PropTypes.number,
};

export default ServiceMenuComponent;
