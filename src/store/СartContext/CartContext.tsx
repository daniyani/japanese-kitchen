import React from "react";
import { ICartContext } from "../../types/cartContext";

const CartContext = React.createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  resetItems: () => {},
});

export default CartContext;
