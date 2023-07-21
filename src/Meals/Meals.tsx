import { FC, useState, useEffect } from "react";
import PromoText from "./PromoText/PromoText";
import styles from "./Meals.module.css";
import Card from "../Components/Card/Card";
import Meal from "./Meal/Meal";
import { IMeals } from "../types/Meals";

const Meals: FC = () => {
  const [meals, setMeals] = useState<Array<IMeals>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://react-http-e0a06-default-rtdb.firebaseio.com/meals.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Что-то пошло не так...");
        }

        return response.json();
      })
      .then((data) => {
        const loadedMeals: Array<IMeals> = [];

        for (let key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PromoText />
      <section className={styles.meals}>
        {isLoading && <p className={styles.centerText}>Загрузка...</p>}
        {error && <p className={styles.centerText}>Что-то пошло не так...</p>}
        {!isLoading && !error && (
          <Card>
            <ul>
              {meals.map((meal) => (
                <Meal
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              ))}
            </ul>
          </Card>
        )}
      </section>
    </>
  );
};

export default Meals;
