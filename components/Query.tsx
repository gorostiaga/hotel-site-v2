import styles from "@/styles/Query.module.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Query = () => {
  return (
    <section id="contact">
      <div className={`${styles["forQuery"]} ${raleway.className}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-md-12">
              <div className={styles["Query_border"]}>
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-6 col-md-6">
                    <div className={styles["Query_text"]}>
                      <p>Alguna consulta?</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className={styles["phone_num"]}>
                      <button className="mobile_no">Whatsapp</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Query;
