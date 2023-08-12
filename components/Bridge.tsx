import styles from "@/styles/Bridge.module.scss";
import imageBackground from "../public/images/bridge/bridge_1.jpg";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Bridge = () => {
  const gradient = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
  };
  const backgroudImage = {
    backgroundImage: "url(../images/bridge/bridge_1.jpg)",
    // backgroundImage: `url(${imageBackground})`,
  };

  return (
    <section style={backgroudImage} className={styles["bridge-section"]}>
      <div className="container ">
        <div className="row">
          <div className="col-xl-12">
            <div
              className={`${styles["bridge_text"]} ${raleway.className} text-center`}
            >
              <h3>Relajate</h3>
              <p>Y dejalo todo a cargo de nosotros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;
