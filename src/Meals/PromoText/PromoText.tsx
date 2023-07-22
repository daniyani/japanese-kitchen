import { FC } from "react";
import styles from "./PromoText.module.css";

const PromoText: FC = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Japanese food restaurant</h2>
      <p>
        here you can taste your favorite sushi and sashimi, rolls and other
        dishes of national Japanese cuisine, prepared by a team of professional
        chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most genuine ingredients
        give dishes a good taste, give pleasure from meals.
      </p>
    </section>
  );
};

export default PromoText;
