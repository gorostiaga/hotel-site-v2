import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/Carousel.module.scss";

import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

interface Image {
  url: string;
  name?: string;
  phrase?: string;
}
interface CarouselProps {
  photos: Image[];
  autoSlide: boolean;
  contain?: boolean;
}

const Carousel: FC<CarouselProps> = ({ photos, autoSlide, contain }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setObjectFit = {
    backgroundSize: contain ? "contain" : "cover",
  };

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
      autoSlide && nextHandler();
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [nextHandler]);

  return (
    <div className={styles["main-container"]}>
      <div
        id="prev_image"
        className={styles["slider_arrow--prev"]}
        onClick={prevHandler}
      >
        ❰
      </div>
      <div
        style={slider_area__slider__container}
        className={`${styles["slider-container"]}`}
      >
        {photos.map((photo, id) => (
          <div key={id} className="h-100 w-100 position-relative">
            <Image
              id="image_carousel"
              src={photo.url}
              alt="Photo"
              className={`${styles["image-container"]}`}
              style={setObjectFit}
              fill
            />
            {photos[currentIndex].name ? (
              <div className="row h-100 ">
                <div className="col-xl-12">
                  <div
                    className={`${styles["text-container__text"]} ${raleway.className} text-center`}
                  >
                    <div>
                      <h3>{photos[currentIndex].name}</h3>
                    </div>
                    <div>
                      <p>{photos[currentIndex].phrase}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
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
    </div>
  );
};

export default Carousel;
