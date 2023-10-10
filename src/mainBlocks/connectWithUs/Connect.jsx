import css from "./Connect.module.css";
import Logo from "../../dumbComponents/logo/Logo";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
import FormConnect from "../../smartComponents/formForConnect/FormConnect";
import { useState } from "react";
import ConnectTypeList from "../../smartComponents/connectTypeList/ConnectTypeList";
import { Element } from "react-scroll";
function Connect() {
  const [typeConnect, setTypeConnect] = useState(null);
  return (
    <Element name="connectContainer">
      <div className={css.connectContainer}>
        <TitleComponent
          text={`Залиште заявку, та з вами обов'язково зв'яжуться`}
        />
        <div className={css.logo}>
          <Logo width={130} />
        </div>
        <ConnectTypeList setType={setTypeConnect} />
        <FormConnect type={typeConnect} cleanType={setTypeConnect} />
      </div>
    </Element>
  );
}

export default Connect;
