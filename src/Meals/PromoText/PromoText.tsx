import { FC } from "react";
import styles from "./PromoText.module.css";

const PromoText: FC = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online sushi restaurant Sushi Maker</h2>
      <p>
        Sushi Maker is an online sushi restaurant where you can enjoy your
        favorite sushi and sashimi, rolls and other dishes of national Japanese
        cuisine are made by the team professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most real components give
        good taste to dishes, give pleasure from a meal.
      </p>
    </section>
  );
};

export default PromoText;
