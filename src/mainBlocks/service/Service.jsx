import { useState } from "react";
import css from "./Service.module.css";
//
import ServiceMenu from "../../smartComponents/serviceMenu/ServiceMenu";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
import ServiceMenuComponent from "../../dumbComponents/serviceMenuComponent/ServiceMenuComponent";
import { serviceNames } from "../../utils/info";

function Service() {
  const [selectService, setSelectService] = useState(1);

  return (
    <section className={css.serviceSection}>
      <TitleComponent text={"Послуги"} marginTop={10} fontSize={20} />
      <ServiceMenu
        nameService={serviceNames}
        setSelectService={setSelectService}
        currentServise={selectService}
      />
      <ServiceMenuComponent countCurrentService={selectService} />
    </section>
  );
}

export default Service;
