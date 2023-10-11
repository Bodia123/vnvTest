import SuperiorityElement from "../../dumbComponents/superiorityElement/SuperiorityElement";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
// icons
import { AiFillHeart, AiOutlineTeam } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { FcIdea } from "react-icons/fc";
import { BsCurrencyDollar, BsFillFileCodeFill } from "react-icons/bs";
//
import css from "./Why.module.css";

function WhyUs() {
  return (
    <section className={css.container}>
      <TitleComponent text={"Чому обирають нас?"} />
      <SuperiorityElement
        icon={<BsCurrencyDollar size={25} color="black" />}
        title="Ціна"
        text="Наші сайти - мають попит, адже якість - неперевершена, та дуже приємна ціна."
      />
      <SuperiorityElement
        icon={<BsFillFileCodeFill size={25} color="black" />}
        title="Хороший код"
        text="Наша команда пише лише якісний код, не використовуючи конструктори."
      />
      <SuperiorityElement
        icon={<AiOutlineTeam size={25} color="black" />}
        title="Команда"
        text="Наша команда складається лише з професіоналів власного діла, ви можете покластись на них."
      />
      <SuperiorityElement
        icon={<AiFillHeart size={25} color="black" />}
        title="Захопленість"
        text="Ми надзвичайно полюбляємо власну справу, тому робимо її на всі 100%"
      />
      <SuperiorityElement
        icon={<FcIdea size={25} color="black" />}
        title="Ідея"
        text="Ми втілюємо у життя будь-які Ваші ідеї."
      />
      <SuperiorityElement
        icon={<BiTimer size={25} color="black" />}
        title="Підтрика коду"
        text="Після закінчення написання проекту, ми не покидаємо Вас! Ви завжди можете звернутись до нас для корекції."
      />
    </section>
  );
}

export default WhyUs;
