import { FC, useState } from "react";
import Header from "./Header/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";

const App: FC = () => {
  const [isCartVIsible, setCartVisible] = useState<boolean>(false);

  const showCartHandler = (): void => {
    setCartVisible(true);
  };

  const hideCartHandler = (): void => {
    setCartVisible(false);
  };

  return (
    <>
      {isCartVIsible && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <Meals />
    </>
  );
};

export default App;
