import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import css from "./Slider.module.css";
import "swiper/css";
import TitleComponent from "../../dumbComponents/titleComponent/TitleComponent";

function Slider({ sliderItems }) {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={css.sliderBox}>
              <img
                src={item.image}
                alt="project image"
                className={css.image}
                loading="lazy"
              />
              <TitleComponent text={item.title} />
              <p className={css.text}>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
Slider.propTypes = {
  sliderItems: propTypes.array,
};
export default Slider;
