import propTypes from "prop-types";
import css from "./Brief.module.css";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
function Brief({ changeBriefModal }) {
  return (
    <section className={css.briefContainer}>
      <TitleComponent text="Заповнення брифу" />
      <h3 className={css.title}>Що таке бриф?</h3>
      <p className={css.text}>
        <span>Бриф</span> – це анкета з питаннями для замовника. Вона дає
        зрозуміти, що являє собою продукт клієнта, і який проект повинен вийти.
        Там прописують: розмір бюджету, дедлайн (термін здачі), побажання, опис
        цільової аудиторії, інформацію про продукт замовника.
      </p>
      <button
        onClick={() => changeBriefModal((old) => !old)}
        className={css.button}
      >
        Заповнити бриф!
      </button>
    </section>
  );
}
Brief.propTypes = {
  changeBriefModal: propTypes.func,
};
export default Brief;
