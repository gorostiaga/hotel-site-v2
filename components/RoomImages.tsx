import React, { FC } from "react";
import Carousel from "./Carousel";
import styles from "@/styles/RoomImages.module.scss";

const RoomImages: FC<{ roomId: string | string[] | undefined }> = ({
  roomId,
}) => {
  const photos = [
    { url: "/images/rooms/room_" + roomId + "/1.jpg" },
    { url: "/images/rooms/room_" + roomId + "/2.jpg" },
    { url: "/images/rooms/room_" + roomId + "/3.jpg" },
  ];

  return (
    <section className={styles["container"]}>
      <Carousel photos={photos} />
    </section>
  );
};

export default RoomImages;
