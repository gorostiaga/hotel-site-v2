import styles from "@/styles/Rooms.module.scss";
import Image from "next/image";
import room_1 from "../public/images/rooms/cabana_1.jpg";
import room_2 from "../public/images/rooms/cabana_2.jpg";
import room_3 from "../public/images/rooms/cabana_3.jpg";
import room_4 from "../public/images/rooms/cabana_4.jpg";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Rooms = () => {
  return (
    <section
      id="rooms"
      className={`${styles["features_room"]} ${raleway.className}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className={`${styles["section_title"]} text-center mb-100`}>
              <span>Cabañas</span>
              <h3>Elige la que mas te guste!</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["rooms_here"]}>
        <div className={styles["single_rooms"]}>
          <div className={styles["room_thumb"]}>
            <img src="./images/rooms/cabana_1.jpg" alt="" />
            <div
              className={`${styles["room_heading"]} d-flex justify-content-between align-items-center`}
            >
              <div>
                {/* <span>From $250/night</span> */}
                <h3>Cabaña 1</h3>
              </div>
              <Link href="/room/1" className="line-button">
                Reserva ahora!
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["single_rooms"]}>
          <div className={styles["room_thumb"]}>
            <img src="./images/rooms/cabana_2.jpg" alt="" />
            <div
              className={`${styles["room_heading"]} d-flex justify-content-between align-items-center`}
            >
              <div>
                {/* <span>From $250/night</span> */}
                <h3>Cabaña 2</h3>
              </div>
              <Link href="/room/2" className="line-button">
                Reserva ahora!
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["single_rooms"]}>
          <div className={styles["room_thumb"]}>
            <img src="./images/rooms/cabana_3.jpg" alt="" />
            <div
              className={`${styles["room_heading"]} d-flex justify-content-between align-items-center`}
            >
              <div>
                {/* <span>From $250/night</span> */}
                <h3>Cabaña 3</h3>
              </div>
              <Link href="/room/3" className="line-button">
                Reserva ahora!
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["single_rooms"]}>
          <div className={styles["room_thumb"]}>
            <img src="./images/rooms/cabana_4.jpg" alt="" />
            <div
              className={`${styles["room_heading"]} d-flex justify-content-between align-items-center`}
            >
              <div>
                {/* <span>From $250/night</span> */}
                <h3>Cabaña 4</h3>
              </div>
              <Link href="/room/4" className="line-button">
                Reserva ahora!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
