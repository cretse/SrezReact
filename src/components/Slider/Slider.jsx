import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://storage.vsemayki.ru/images/0/3/3132/3132435/previews/people_2_smock_front_black_500.jpg"></img>
      </div>
    </Slider>
  );
}