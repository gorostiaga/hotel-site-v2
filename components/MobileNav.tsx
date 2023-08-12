import Link from "next/link";
import styles from "@/styles/MobileNav.module.scss";
import { Raleway } from "next/font/google";
import { FC } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

type MobileNavProps = {
  onClickHandler: () => void;
};

const MobileNav: FC<MobileNavProps> = (props) => {
  const clickHandler = () => {
    props.onClickHandler();
  };

  return (
    <nav className={styles["container"]}>
      <div className={`${styles["mobile-nav__items"]} ${raleway.className}`}>
        <ul className={styles["mobile-nav__items"]}>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#home" onClick={clickHandler}>
              Inicio
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#rooms" onClick={clickHandler}>
              Habitaciones
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#about" onClick={clickHandler}>
              Acerca de
            </Link>
          </li>
          <li className={styles["mobile-nav__item"]}>
            <Link href="#contact" onClick={clickHandler}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
