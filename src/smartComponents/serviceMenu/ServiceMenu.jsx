import PropTypes, { object } from "prop-types";
import css from "./Service.module.css";

function ServiceMenu({ nameService, setSelectService, currentServise }) {
  return (
    <div className={css.serviceListContainer}>
      <ul className={css.serviceList}>
        {nameService.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectService(Number(item.id))}
            className={
              item.id === currentServise
                ? css.selectedServiceItem
                : css.serviceItem
            }
          >
            <span className={css.serviceText}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ServiceMenu.propTypes = {
  nameService: PropTypes.arrayOf(object),
  setSelectService: PropTypes.func,
  currentServise: PropTypes.number,
};

export default ServiceMenu;
