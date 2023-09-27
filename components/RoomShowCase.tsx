import React from "react";
import styles from "@/styles/RoomShowCase.module.scss";
import Link from "next/link";
import Image from "next/image";

type RoomShowCaseProps = {
  mainImageSource: string;
  name: string;
  url: string;
};

const RoomShowCase: React.FC<RoomShowCaseProps> = (props) => {
  return (
    <div className={styles["single_rooms"]}>
      <div className={styles["room_thumb"]}>
        <img src={props.mainImageSource} alt="" />
        {/* <Image
          src={props.mainImageSource}
          alt="Room Image"
          fill
          className={styles["room-main-image"]}
        /> */}
        <div
          className={`${styles["room_heading"]} d-flex justify-content-between align-items-center`}
        >
          <div>
            {/* <span>From $250/night</span> */}
            <h3>{props.name}</h3>
          </div>
          <Link href={props.url} className="line-button">
            Reserva ahora!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomShowCase;
