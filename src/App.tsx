import { FC, useState } from "react";
import Header from "./Header/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartContextProvider from "./store/СartContext/CartContextProvider";

const App: FC = () => {
  const [isCartVisible, setCartVisible] = useState<boolean>(false);

  const showCartHandler = (): void => {
    setCartVisible(true);
  };

  const hideCartHandler = (): void => {
    setCartVisible(false);
  };

  return (
    <CartContextProvider>
      {isCartVisible && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <Meals />
    </CartContextProvider>
  );
};

export default App;
