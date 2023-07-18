import { FC } from "react";
import styles from "./PromoText.module.css";

const PromoText: FC = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Онлайн суши-ресторан Япона кухня</h2>
      <p>
        Япона кухня — это онлайн-суши-ресторан, где вы сможете отведать любимые
        суши и сашими, роллы и другие блюда национальной японской кухни,
        приготовленные командой профессиональных поваров.
      </p>
      <p>
        Быстрая работа и качественные продукты, а также самые настоящие
        ингредиенты придают блюдам хороший вкус, доставляют удовольствие от
        трапезы.
      </p>
    </section>
  );
};

export default PromoText;
