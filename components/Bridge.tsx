import styles from "@/styles/Bridge.module.scss";
import imageBackground from "@/public/images/bridge/bridge_1.jpg";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Bridge = () => {
  const gradient = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
  };

  return (
    <section className={styles["bridge-section"]}>
      <Image
        src={imageBackground}
        alt="Brige"
        placeholder="blur"
        className={styles["image-container"]}
        fill
      />
      <div className="row w-100">
        <div className="col-xl-12">
          <div
            className={`${styles["bridge_text"]} ${raleway.className} text-center`}
          >
            <div>
              <h3>Relajate</h3>
            </div>
            <div>
              <p>Y dejalo todo a cargo de nosotros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
