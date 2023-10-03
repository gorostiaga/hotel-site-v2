import styles from "@/styles/About.module.scss";
import Image from "next/image";
import about_1 from "@/public/images/about/about_1.jpg";
import about_2 from "@/public/images/about/about_2.jpg";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function About() {
  return (
    <section id="about" className={styles["about_area"]}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className={`${styles["about_info"]} ${raleway.className}`}>
              <div className={`${styles["section_title"]} mb-20px`}>
                <span>Acerca de Nosotros</span>
                <h3>
                  Sientete como en Casa
                  <br />
                  junto a la Naturaleza
                </h3>
              </div>
              <p>
                La Finca es un Hotel donde nuestra mayor preocupacion es
                hacerlos sentir como en casa. Desde la bienvenida hasta la
                despedida, ustedes son nuestra mayor prioridad. Sentimos que la
                naturaleza que acoge a La Finca es un ambiente de paz y
                tranquilidad, nosotros queremos compartir esas sensaciones con
                ustedes.
              </p>
              <a href="#" className="line-button">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 d-flex align-items-center">
            <div className={`${styles["about_thumb"]} d-flex `}>
              <div className={styles["img_1"]}>
                <Image
                  alt="about_1"
                  src={about_1}
                  object-fit="cover"
                  placeholder="blur"
                />
              </div>
              <div className={styles["img_2"]}>
                <Image
                  alt="about_2"
                  src={about_2}
                  object-fit="cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
