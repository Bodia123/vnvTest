import { useState } from "react";
import Faq from "../mainBlocks/faq/Faq";
import Header from "../mainBlocks/header/Header";
import Service from "../mainBlocks/service/Service";
import WhyUs from "../mainBlocks/whyUs/WhyUs";
import Widget from "../mainBlocks/widget/Widget";
import css from "./App.module.css";
import WidgetWIndow from "../mainBlocks/widgetWindow/WidgetWIndow";
import Connect from "../mainBlocks/connectWithUs/Connect";
import SocialBlock from "../mainBlocks/socialContainer/SocialBlock";
import Projects from "../mainBlocks/ourProjects/Projects";
import Brief from "../mainBlocks/brief/Brief";
import BriefModal from "../smartComponents/briefModal/BriefModal";

function App() {
  const [messageWindowOpen, setMessageWindowOpen] = useState(false);
  const [briefModal, setBriefModal] = useState(false);

  return (
    <div className={css.mainContainer}>
      <Header />
      <Projects />
      <WhyUs />
      <Service />
      <Connect />
      <Brief changeBriefModal={setBriefModal} />
      {briefModal && <BriefModal closeWindow={setBriefModal} />}

      <Faq />
      <SocialBlock />
      <Widget changeMessageWindow={setMessageWindowOpen} />

      {messageWindowOpen && <WidgetWIndow closeWindow={setMessageWindowOpen} />}
    </div>
  );
}

export default App;
