import Calendar from "react-calendar";

import styles from "@/styles/RoomCalendar.module.scss";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const RoomCalendar = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className={styles["section-calendar"]}>
      <form className={`${styles["form-container"]} ${raleway.className}`}>
        <div className={styles["calendar-container"]}>
          {isClient ? (
            <Calendar
              minDate={new Date()}
              selectRange={true}
              minDetail="month"
              next2Label={null}
              prev2Label={null}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className={styles["calendar-submit"]}>
          <button type="submit" className={styles["calendar-submit__btn"]}>
            Reservar
          </button>
        </div>
      </form>
    </section>
  );
};

export default RoomCalendar;
