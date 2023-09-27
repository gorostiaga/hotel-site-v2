import styles from "@/styles/Rooms.module.scss";

import { Raleway } from "next/font/google";

import roomDummyObject from "@/utils/roomDummyData";
import RoomShowCase from "./RoomShowCase";

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
        {roomDummyObject.cabins.map((cabin, index) => (
          <RoomShowCase
            key={index}
            name={cabin.name}
            mainImageSource={cabin.photos[0]}
            url={cabin.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Rooms;
