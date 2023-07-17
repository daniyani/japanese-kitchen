import { FC } from "react";
import CartIcon from "../../Svg/CartIcon/CartIcon";

import styles from "./HeaderButton.module.css";

const HeaderButton: FC = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>0</span>
      </button>
    </>
  );
};

export default HeaderButton;
