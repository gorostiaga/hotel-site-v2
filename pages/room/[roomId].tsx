import RoomCalendar from "@/components/RoomCalendar";
import RoomForm from "@/components/RoomForm";
import RoomImages from "@/components/RoomImages";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from "@/styles/RoomId.module.scss";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Room = () => {
  const router = useRouter();
  const roomId = router.query.roomId;
  const [isBooking, setIsBooking] = useState(false);
  const [bookingDays, setBookingDays] = useState<String[]>([]);
  const peoplePriceRef = useRef<string[]>([]);
  const [peoplePrice, setPeoplePrice] = useState<string[]>([]);

  const onChangeHandler = (days: String[], peoplePrice: string[]) => {
    //peoplePriceRef.current = peoplePrince;
    //a very important lesson:
    //the useState variable won't re-render if its value dont change
    //So it is a best practice to use useState for each variable that
    //is likely to change.
    //eg:
    //RoomForm won't re-render new values of peoplePriceRef.current
    //unless days or isBooking changes.
    //Given that we need to re-render when peoplePrice changes
    //we need to use useSate like this:
    setPeoplePrice(peoplePrice);
    setBookingDays(days);
    setIsBooking(true);
  };

  return (
    <>
      {roomId && <RoomImages roomId={roomId} />}
      <div className={`${styles["book-container"]} ${raleway.className}`}>
        <h2>
          Estamos trabajando en un sistema de reservas y pagos automaticos
        </h2>
        <p>Mientras tanto escribemos al WhatsApp para realizar la reserva</p>
        <Link
          href={`https://wa.me/59173258754?text=Hola!%20Quiero%20tener%20mas%20informacion%20sobre%20la%20cabaña%20${roomId}
`}
          className={styles["link-whatsapp"]}
        >
          Hablamos aca!
        </Link>

        <div className={styles["maintainace-container"]}>
          <RoomCalendar onChange={onChangeHandler} />
          {isBooking ? (
            //if we want we  can set peoplePrice={peoplePriceRef.current}
            //as long as we make sure a re-render happens whenever
            // the prop peoplePrice of onChangeHandler changes
            //for that we need setPeoplePrice(peoplePrice);
            <RoomForm days={bookingDays} peoplePrice={peoplePrice} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Room;
