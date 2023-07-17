import { FC } from "react";
import suchiImg from "../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";

type Props = {
  showCartHandler: () => void;
};

const Header: FC<Props> = ({ showCartHandler }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Sushi Maker</h1>
        <HeaderButton showCartHandler={showCartHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={suchiImg} alt="Sushi img" />
      </div>
    </>
  );
};

export default Header;
