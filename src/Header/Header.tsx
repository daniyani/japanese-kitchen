import { FC } from "react";
import suchiImg from "../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanese kitchen</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={suchiImg} alt="Sushi img" />
      </div>
    </>
  );
};

export default Header;
