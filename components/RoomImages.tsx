import React, { FC, useEffect, useState } from "react";
import Carousel from "./Carousel";
import styles from "@/styles/RoomImages.module.scss";
import roomDummyObject from "@/utils/roomDummyData";

interface Image {
  url: string;
  name?: string;
  phrase?: string;
}

const RoomImages: FC<{ roomId: string | string[] | undefined }> = ({
  roomId,
}) => {
  const [id, setId] = useState<string | string[]>(roomId!);
  //const id = roomId ? +roomId : null;
  const cabin = roomDummyObject.cabins.find((cabin) => cabin.id === +id);
  const photosArray = cabin?.photos.map((photo) => {
    return { url: photo };
  });
  const [photos, setPhotos] = useState<Image[]>(photosArray!);

  return (
    <section className={styles["container"]}>
      <Carousel photos={photos!} autoSlide={false} contain />
    </section>
  );
};

export default RoomImages;
