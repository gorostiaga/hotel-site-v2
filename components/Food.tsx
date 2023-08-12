import styles from "@/styles/Food.module.scss";
import Image from "next/image";
import food_1 from "../public/images/food/food_1.jpg";
import food_2 from "../public/images/food/food_2.jpg";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Food = () => {
  return (
    <section className={styles["food_area"]}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className={`${styles["food_thumb"]} d-flex`}>
              <div className={styles["img_1"]}>
                <Image alt="food_1" src={food_1} object-fit="cover" />
              </div>
              <div className={styles["img_2"]}>
                <Image alt="food_2" src={food_2} object-fit="cover" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className={`${styles["food_info"]} ${raleway.className}`}>
              <div className={`${styles["section_title"]} mb-20px`}>
                <span>La deliciosa Comida</span>
                <h3>
                  Nosotros Servimos
                  <br />
                  fresca y deliciosa comida
                </h3>
              </div>
              <p>
                La comida es preparada con mucho esmero y cariño, con los
                ingredientes mas fresco y mejor seleccionados. No hay como comer
                en casa, lo sabemos, es por eso que deseamos igualar esa
                sensación de hogar con sabor. El mejor café del mundo acompañado
                de las frutas mas frescas que nos da la naturaleza misma.
              </p>
              <a href="#" className="line-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;
