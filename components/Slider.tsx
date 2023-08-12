import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/Slider.module.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const photos = [
  {
    url: "./images/slider/slider_1.jpg",
    name: "Hotel La Finca",
    phrase: "Una entrada a la Naturaleza",
  },
  {
    url: "./images/slider/slider_2.jpg",
    name: "La Vida es Bella",
    phrase: "Permitenos mostrarte este mundo",
  },
  {
    url: "./images/slider/slider_3.jpg",
    name: "La Naturaleza es Salud",
    phrase: "Disfruta, Vive, Sana",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getImageBackground = (id: number) => ({
    background: `url(${photos[id].url})`,
    width: "100vw",
  });

  const slider_area__slider__container = {
    width: `${100 * photos.length}vw`,
    transform: `translateX(${-currentIndex * 100}vw)`,
  };

  const prevHandler = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextHandler = useCallback(() => {
    const isLast = currentIndex === photos.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [photos, currentIndex]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextHandler();
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [nextHandler]);

  return (
    <section id="home" className={styles["slider_area"]}>
      <div
        id="prev_image"
        className={styles["slider_arrow--prev"]}
        onClick={prevHandler}
      >
        ❰
      </div>
      <div
        style={slider_area__slider__container}
        className={`${styles["slider_area__slider"]}`}
      >
        {photos.map((photo, id) => (
          <div
            key={id}
            id="image_carousel"
            style={getImageBackground(id)}
            className={`${styles["single_slider"]} d-flex align-items-center justify-content-center`}
          >
            <div className="container ">
              <div className="row">
                <div className="col-xl-12">
                  <div
                    className={`${styles["slider_text"]} ${raleway.className} text-center`}
                  >
                    <h3>{photos[currentIndex].name}</h3>
                    <p>{photos[currentIndex].phrase}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        id="next_image"
        className={styles["slider_arrow--next"]}
        onClick={nextHandler}
      >
        ❱
      </div>
    </section>
  );
};

export default Slider;
