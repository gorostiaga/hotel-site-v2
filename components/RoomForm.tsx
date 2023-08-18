import styles from "@/styles/RoomForm.module.scss";
import { Raleway } from "next/font/google";
import { useEffect, useReducer, useRef, useState } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "IDDOCUMENT_BLUR":
//       return {
//         ...state,
//         isIdDocumentNotEmpty: action.idDocumentVal.trim() !== "",
//       };

//     case "FIRSTNAME_BLUR":
//       return {
//         ...state,
//         isFirstNameNotEmpty: action.fistNameVal.toString().trim() !== "",
//       };

//     case "LASTNAME_BLUR":
//       return {
//         ...state,
//         isLastNameNotEmpty: action.lastNameVal.trim() !== "",
//       };

//     case "PEOPLE_BLUR":
//       return {
//         ...state,
//         isPeopleNotEmppty: action.peopleVal.trim() !== "",
//         isPeopleValid: !isNaN(action.peopleVal),
//       };

//     case "EMAIL_BLUR":
//       return {
//         ...state,
//         isEmailNotEmpty: action.emailVal.trim() !== "",
//         isEmailValid: action.emailVal.includes("@"),
//       };

//     case "PHONE_BLUR":
//       return {
//         ...state,
//         isPhoneNotEmpty: action.phoneVal.trim() !== "",
//         isPhoneValid: !isNaN(action.phoneVal),
//       };

//     case "ORIGINCITY_BLUR":
//       return {
//         ...state,
//         isOriginCityNotEmpty: action.originCityVal.trim() !== "",
//       };

//     case "SAVED_FORM":
//       return {
//         isIdDocumentNotEmpty: true,
//         isFirstNameNotEmpty: true,
//         isLastNameNotEmpty: true,
//         isEmailNotEmpty: true,
//         isEmailValid: true,
//         isPhoneNotEmpty: true,
//         isPhoneValid: true,
//         isOriginCityNotEmpty: true,
//       };

//     default:
//       return {
//         isIdDocumentNotEmpty: false,
//         isFirstNameNotEmpty: false,
//         isLastNameNotEmpty: false,
//         isPeopleNotEmppty: false,
//         isPeopleValid: false,
//         isEmailNotEmpty: false,
//         isEmailValid: false,
//         isPhoneNotEmpty: false,
//         isPhoneValid: false,
//         isOriginCityNotEmpty: false,
//         isFormValid: false,
//       };
//   }
// };

type RoomFormProps = {
  days: String[];
  peoplePrice: string[];
};

const RoomForm: React.FC<RoomFormProps> = (props) => {
  const [formIsValid, setFormIsValid] = useState<Map<string, boolean>>(
    new Map()
  );

  //   const [formState, dispatchForm] = useReducer(formReducer, {
  //     isIdDocumentNotEmpty: false,
  //     isFirstNameNotEmpty: false,
  //     isLastNameNotEmpty: false,
  //     isPeopleNotEmppty: false,
  //     isPeopleValid: false,
  //     isEmailNotEmpty: false,
  //     isEmailValid: false,
  //     isPhoneNotEmpty: false,
  //     isPhoneValid: false,
  //     isOriginCityNotEmpty: false,
  //     isFormValid: false,
  //   });

  const idDocumentInputRef = useRef<HTMLInputElement | null>(null);
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  const lastNameInputRef = useRef<HTMLInputElement | null>(null);
  const peopleInputRef = useRef<HTMLSelectElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const originCityInputRef = useRef<HTMLInputElement | null>(null);
  const paymentTypeInputRef = useRef<HTMLSelectElement | null>(null);

  const [isIdValid, setIsIdValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isOriginCityValid, setIsOriginCityValid] = useState(true);

  //const isValidFormRef = useRef<Boolean>(false);

  //   useEffect(() => {
  //     setFormIsValid(
  //       formState.isIdDocumentNotEmpty &&
  //         formState.isFirstNameNotEmpty &&
  //         formState.isLastNameNotEmpty &&
  //         formState.isPeopleNotEmppty &&
  //         formState.isPeopleValid &&
  //         formState.isEmailNotEmpty &&
  //         formState.isEmailValid &&
  //         formState.isPhoneNotEmpty &&
  //         formState.isPhoneValid &&
  //         formState.isOriginCityNotEmpty
  //     );
  //   }, [
  //     formState.isIdDocumentNotEmpty,
  //     formState.isFirstNameNotEmpty,
  //     formState.isLastNameNotEmpty,
  //     formState.isPeopleNotEmppty,
  //     formState.isPeopleValid,
  //     formState.isEmailNotEmpty,
  //     formState.isEmailValid,
  //     formState.isPhoneNotEmpty,
  //     formState.isPhoneValid,
  //     formState.isOriginCityNotEmpty,
  //   ]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = phoneInputRef.current?.value;

    // const hm = new Map();
    // hm.set(
    //   "idDocumentInputRef",
    //   idDocumentInputRef.current?.value.trim() != ""
    // );
    // hm.set("firstNameInputRef", firstNameInputRef.current?.value.trim() != "");
    // hm.set("lastNameInputRef", lastNameInputRef.current?.value.trim() != "");
    // hm.set(
    //   "emailInputRef",
    //   emailInputRef.current?.value.trim() != "" &&
    //     emailInputRef.current?.value.includes("@")
    // );
    // hm.set(
    //   "phoneInputRef",
    //   phoneInputRef.current?.value.trim() != "" && !isNaN(Number(phoneNumber))
    // );
    // hm.set(
    //   "originCityInputRef",
    //   originCityInputRef.current?.value.trim() != ""
    // );

    // const arrayValues = Array.from(hm.values());
    // const isValidForm = arrayValues.reduce(
    //   (result, value) => result && value,
    //   true
    // );

    // setFormIsValid(hm);

    // const isValidForm =
    //   idDocumentInputRef.current?.value.trim() != "" &&
    //   firstNameInputRef.current?.value.trim() != "" &&
    //   lastNameInputRef.current?.value.trim() != "" &&
    //   peopleInputRef.current?.value.trim() != "" &&
    //   emailInputRef.current?.value.trim() != "" &&
    //   emailInputRef.current?.value.includes("@") &&
    //   phoneInputRef.current?.value.trim() != "" &&
    //   !isNaN(Number(phoneNumber)) &&
    //   originCityInputRef.current?.value.trim() != "" &&
    //   paymentTypeInputRef.current?.value.trim() != "";

    setIsIdValid(idDocumentInputRef.current?.value.trim() != "");
    setIsFirstNameValid(firstNameInputRef.current?.value.trim() != "");
    setIsLastNameValid(lastNameInputRef.current?.value.trim() != "");
    if (emailInputRef.current?.value)
      setIsEmailValid(
        emailInputRef.current?.value.trim() != "" &&
          emailInputRef.current?.value.includes("@")
      );
    setIsPhoneValid(
      phoneInputRef.current?.value.trim() != "" && !isNaN(Number(phoneNumber))
    );
    setIsOriginCityValid(originCityInputRef.current?.value.trim() != "");

    if (
      !isIdValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isOriginCityValid
    ) {
      return;
    }
  };

  const idDocumentStyle = isIdValid ? "" : styles["invalid"];
  const firstNameStyle = isFirstNameValid ? "" : styles["invalid"];
  const lastNameStyle = isLastNameValid ? "" : styles["invalid"];
  const emailStyle = isEmailValid ? "" : styles["invalid"];
  const phoneStyle = isPhoneValid ? "" : styles["invalid"];
  const originCityStyle = isOriginCityValid ? "" : styles["invalid"];

  return (
    <section className={styles["section-container"]}>
      <form action="" className={`${styles["room-form"]} ${raleway.className}`}>
        <label htmlFor="checkin">Día de Entrada</label>
        <input
          id="checkin"
          name="checkin"
          required
          value={props.days[0].valueOf()}
          readOnly
        />
        <label htmlFor="checkout">Día de Salida</label>
        <input
          id="checkout"
          name="checkout"
          required
          value={props.days[1].valueOf()}
          readOnly
        />
        <label htmlFor="night">Cantidad de Noches </label>
        <input
          id="night"
          type="text"
          name="night"
          required
          value={props.days[2].valueOf()}
          readOnly
        />
        <label htmlFor="people">Nro de personas</label>
        <input
          id="people"
          type="text"
          name="people"
          required
          value={props.peoplePrice[0]}
          readOnly
        />
        <label htmlFor="price">Precio Total</label>
        <input
          id="price"
          type="text"
          name="price"
          required
          value={props.peoplePrice[1]}
          readOnly
        />

        <label htmlFor="idDocument">Carnet de Identidad</label>
        <input
          id="idDocument"
          type="text"
          name="idDocument"
          required
          //onBlur={idDocumentBlurHanlder}
          ref={idDocumentInputRef}
          className={idDocumentStyle}
        />
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          required
          //defaultValue={isSavedForm ? savedForm.firstName : ""}
          ref={firstNameInputRef}
          //onBlur={firstNameBlurHandler}
          className={firstNameStyle}
        />
        <label htmlFor="lastName">Apellido</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          required
          //defaultValue={isSavedForm ? savedForm.lastName : ""}
          ref={lastNameInputRef}
          //onBlur={lastNameBlurHandler}
          className={lastNameStyle}
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          type="text"
          name="email"
          required
          //defaultValue={isSavedForm ? savedForm.email : ""}
          ref={emailInputRef}
          //onBlur={emailBlurHandler}
          className={emailStyle}
        />
        <label htmlFor="phone">Telefono Celular</label>
        <input
          id="phone"
          type="text"
          name="phone"
          required
          //defaultValue={isSavedForm ? savedForm.phone : ""}
          ref={phoneInputRef}
          //onBlur={phoneBlurHandler}
          className={phoneStyle}
        />
        <label htmlFor="originCity">Ciudad de Origen</label>
        <input
          id="originCity"
          type="text"
          name="originCity"
          required
          //defaultValue={isSavedForm ? savedForm.originCity : ""}
          ref={originCityInputRef}
          //onBlur={originCityBlurHandler}
          className={originCityStyle}
        />
        <label htmlFor="paymentType">Tipo de Pago: </label>
        <select
          id="paymentType"
          name="paymentType"
          ref={paymentTypeInputRef}
          defaultValue={""}
        >
          <option value="Efectivo">Efectivo</option>
          <option value="QR">QR</option>
        </select>
        <div></div>
        <div className={styles["form-submit"]}>
          <button type="submit" onClick={submitHandler}>
            Reservar
          </button>
        </div>
      </form>
    </section>
  );
};

export default RoomForm;
