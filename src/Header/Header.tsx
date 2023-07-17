import { FC } from "react";
import suchiImg from "../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanese kitchen</h1>
        <HeaderButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={suchiImg} alt="Sushi img" />
      </div>
    </>
  );
};

export default Header;
