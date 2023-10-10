import propTypes from "prop-types";
import css from "./Brief.module.css";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
function Brief({ changeBriefModal }) {
  return (
    <section className={css.briefContainer}>
      <TitleComponent text="Заповнення брифу" />
      <p>Що таке бриф?</p>
      <p>
        Бриф – це анкета з питаннями для замовника. Вона дає зрозуміти, що являє
        собою продукт клієнта, і який проект повинен вийти. Там прописують:
        розмір бюджету, дедлайн (термін здачі), побажання, опис цільової
        аудиторії, інформацію про продукт замовника.
      </p>
      <button onClick={() => changeBriefModal((old) => !old)}>
        Заповнити бриф!
      </button>
    </section>
  );
}
Brief.propTypes = {
  changeBriefModal: propTypes.func,
};
export default Brief;
