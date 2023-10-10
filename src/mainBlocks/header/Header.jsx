import css from "./Header.module.css";
import Logo from "../../dumbComponents/logo/Logo";
import ButtonLink from "../../dumbComponents/buttonToSomeWhere/ButtonLink";
function Header() {
  return (
    <div className={css.headerContainer}>
      <div className={css.headerBox}>
        <h2 className={css.headerElement}>Vnv Solution</h2>
        <ButtonLink />
      </div>
      <div className={css.logoContainer}>
        <Logo width={150} />
      </div>
    </div>
  );
}

export default Header;
