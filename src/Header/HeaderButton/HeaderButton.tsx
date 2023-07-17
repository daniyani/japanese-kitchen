import { FC } from "react";
import CartIcon from "../../Svg/CartIcon/CartIcon";

import styles from "./HeaderButton.module.css";

type Props = {
  showCartHandler: () => void;
};

const HeaderButton: FC<Props> = ({ showCartHandler }) => {
  return (
    <>
      <button className={styles.button} onClick={showCartHandler}>
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
