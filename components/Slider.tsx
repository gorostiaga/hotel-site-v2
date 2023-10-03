import styles from "@/styles/Slider.module.scss";
import Carousel from "./Carousel";

const photos = [
  {
    url: "/images/slider/slider_1.jpg",
    name: "Hotel La Finca",
    phrase: "Una entrada a la Naturaleza",
  },
  {
    url: "/images/slider/slider_2.jpg",
    name: "La Vida es Bella",
    phrase: "Permitenos mostrarte este mundo",
  },
  {
    url: "/images/slider/slider_3.jpg",
    name: "La Naturaleza es Salud",
    phrase: "Disfruta, Vive, Sana",
  },
];

const Slider = () => {
  return (
    <section id="home" className={styles["slider_area"]}>
      <Carousel photos={photos} autoSlide={true} />
    </section>
  );
};

export default Slider;
