import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";
import Slider from "../../smartComponents/sliderImages/Slider";
import css from "./Projects.module.css";

// image
import workFirst from "../../assets/work/iren.png";
import workSecond from "../../assets/work/learnitlive.png";
import workThird from "../../assets/work/volstiny_production.png";

const workImage = [
  {
    image: workFirst,
    title: "Сервіс доставки",
    text: "Банкетний зал 'Ірен' - служба доставки смачної їжі від Ірен. Ви можете зареєструватись, замовити та оплатити не покидаючи сайт!",
  },
  {
    image: workSecond,
    title: "Веб-сервіс",
    text: "Lernitlive - веб-сервіс для тренерів та експертів, де вони можуть навчати онлайн. Простими словами - це маркетплейс з додатковим функціоналом для проходження курсіві відвідувати заняття. Ви можете переглянути курси, вибрати свого тренера, відповідно до нього оцінка та відгуки.",
  },
  {
    image: workThird,
    title: "Маркетплейс",
    text: `Volstiny production - Маркетплейс для дизайнерського агентства. Потужний і
   креативний веб-сайт для потужних творців. Унікальний дизайн, багато анімації
   і внутрішній ринок – веб-сайт швидший за Форест Гамп і готовий до роботи
   рекламні кампанії SEO.`,
  },
];
//
function Projects() {
  return (
    <div>
      <TitleComponent text="Наші проекти" />
      <Slider sliderItems={workImage} />
    </div>
  );
}

export default Projects;
