import styles from "@/styles/QueryForm.module.scss";
import { useEffect, useRef, useState } from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const QueryForm = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const textInputRef = useRef<HTMLInputElement | null>(null);

  const [nameIsValid, setNameIsValid] = useState(true);
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [textIsValid, setTextIsValid] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  const [formIsValid, setFormIsValid] = useState<Map<string, boolean>>(
    new Map()
  );

  useEffect(() => {
    setMessageSent(false);
  }, []);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = phoneInputRef.current?.value;

    setNameIsValid(nameInputRef.current?.value.trim() != "");
    setPhoneIsValid(
      phoneInputRef.current?.value.trim() != "" && !isNaN(Number(phoneNumber))
    );
    setTextIsValid(textInputRef.current?.value.trim() != "");

    if (!nameIsValid && !phoneIsValid && !textIsValid) {
      return;
    }
    const data = {
      name: nameInputRef.current?.value,
      phone: phoneInputRef.current?.value,
      text: textInputRef.current?.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/queryform";
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    if (response.ok) {
      console.log("Result: " + result.message);

      if (nameInputRef.current) nameInputRef.current.value = "";
      if (phoneInputRef.current) phoneInputRef.current.value = "";
      if (textInputRef.current) textInputRef.current.value = "";
      setMessageSent(true);
    }
  };

  const nameStyle = nameIsValid ? "" : styles["invalid"];
  const phoneStyle = phoneIsValid ? "" : styles["invalid"];
  const textStyle = textIsValid ? "" : styles["invalid"];

  return (
    <div className={`${styles["container"]} ${raleway.className}`}>
      <h3>
        Llena el formulario con tu consulta y te responderemos super rapido!!
      </h3>
      {messageSent ? (
        <h3>Mensaje enviado</h3>
      ) : (
        <form className={styles["form-container"]}>
          <label htmlFor="name">Tu nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            ref={nameInputRef}
            className={nameStyle}
          />
          <label htmlFor="phone">Tu celular</label>
          <input
            id="phone"
            type="text"
            name="phone"
            required
            ref={phoneInputRef}
            className={phoneStyle}
          />
          <label htmlFor="phone">Tu mensaje</label>
          <input
            id="text"
            type="text"
            name="phone"
            required
            ref={textInputRef}
            className={textStyle}
          />
          <div></div>
          <div className={styles["form-submit"]}>
            <button type="submit" onClick={submitHandler}>
              Reservar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default QueryForm;
