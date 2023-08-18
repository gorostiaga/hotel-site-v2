import Calendar from "react-calendar";
import { getQuotation } from "./Quotation";

import styles from "@/styles/RoomCalendar.module.scss";
import { Raleway } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

type RoomCalendarProps = {
  onChange: (days: String[], peoplePrice: string[]) => void;
};

const RoomCalendar: React.FC<RoomCalendarProps> = (props) => {
  const [isClient, setIsClient] = useState(false);
  const [isValidDate, setIsValidDate] = useState(true);
  const [days, setDays] = useState<String[]>([]);
  const peopleInputRef = useRef<HTMLInputElement | null>(null);
  const peoplePriceRef = useRef<string[]>([]);

  let clickedDate: String | undefined;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const daysCounter = (dInitial: Date, dEnd: Date) => {
    // To calculate the time difference of two dates
    const difference = Math.abs(dEnd.getTime() - dInitial.getTime());

    // To calculate the no. of days between two dates
    const numberNights = Math.round(difference / (1000 * 3600 * 24) - 1);
    return numberNights;
  };

  const formatDate = (date: Date) => {
    return Intl.DateTimeFormat("es-BO", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  const onChangeHandler = (
    value: any,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const selectedDates = value;

    const numberNights = daysCounter(selectedDates[0], selectedDates[1]);

    const startDay = formatDate(selectedDates[0]);
    const endDay = formatDate(selectedDates[1]);
    //days stores the checkin day, checkoutday and the number of nights
    //additionally we add the number of people
    setDays([startDay, endDay, numberNights.toString()]);
  };

  const onClickHandler = (dayClicked: Date) => {
    clickedDate = formatDate(dayClicked);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      (days[1] !== clickedDate && clickedDate !== undefined) ||
      peopleInputRef.current?.value.trim() == ""
    ) {
      setIsValidDate(false);
      return;
    }
    const totalPrice = getQuotation(
      peopleInputRef.current?.value,
      days[2].valueOf()
    );
    peoplePriceRef.current = [
      peopleInputRef.current?.value ? peopleInputRef.current.value : "0",
      totalPrice,
    ];

    props.onChange(days, peoplePriceRef.current);
  };

  return (
    <section className={styles["section-calendar"]}>
      <form className={`${styles["form-container"]} ${raleway.className}`}>
        <div className={styles["calendar-container"]}>
          {isClient ? (
            <Calendar
              onChange={onChangeHandler}
              onClickDay={onClickHandler}
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
        <div className={styles["people"]}>
          <label htmlFor="people">Nro de personas</label>
          <input
            type="number"
            id="people"
            min="1"
            max="15"
            ref={peopleInputRef}
          />
        </div>
        <div className={styles["calendar-submit"]}>
          <button
            type="submit"
            className={styles["calendar-submit__btn"]}
            onClick={submitHandler}
          >
            Cotizar
          </button>
        </div>
        {isValidDate ? (
          ""
        ) : (
          <div className={styles["date-invalid"]}>
            Debes Introducir dos fechas y elegir el numero de personas
          </div>
        )}
      </form>
    </section>
  );
};

export default RoomCalendar;
