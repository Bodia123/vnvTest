import css from "./Connect.module.css";
import Logo from "../../dumbComponents/logo/Logo";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
import FormConnect from "../../smartComponents/formForConnect/FormConnect";
import { useState } from "react";
import ConnectTypeList from "../../smartComponents/connectTypeList/ConnectTypeList";
import { Element } from "react-scroll";

function Connect({ briefMessage, setMessage }) {
  const [typeConnect, setTypeConnect] = useState("number");
  return (
    <Element name="connectContainer">
      <div className={css.connectContainer} id="connect">
        <TitleComponent
          text={`Залиште заявку, та з вами обов'язково зв'яжуться`}
        />
        <div className={css.logo}>
          <Logo width={130} background={"white"} />
        </div>
        <ConnectTypeList setType={setTypeConnect} />
        <FormConnect
          type={typeConnect}
          cleanType={setTypeConnect}
          briefMessage={briefMessage}
          setMessage={setMessage}
        />
      </div>
    </Element>
  );
}

export default Connect;
