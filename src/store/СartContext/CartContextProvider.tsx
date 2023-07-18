import { FC, ReactNode, useReducer, Reducer } from "react";
import CartContext from "./CartContext";
import {
  CartState,
  ICartContext,
  ICartItems,
  CartContextActions,
  CartContextKind,
} from "../../types/cartContext";

const defaultState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: CartState,
  action: CartContextActions
): CartState => {
  if (action.type === CartContextKind.ADD_ITEM) {
    const { payload } = action;

    const updatedTotalAmount =
      state.totalAmount + payload.amount * payload.price;

    const updatedItems = state.items.concat(payload);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultState;
};

type Props = {
  children: JSX.Element | Array<JSX.Element> | ReactNode;
};

const CartContextProvider: FC<Props> = ({ children }) => {
  const [cartState, cartDispatcher] = useReducer<
    Reducer<CartState, CartContextActions>
  >(cartReducer, defaultState);

  const addItemHandler = (item: ICartItems): void => {
    cartDispatcher({ type: CartContextKind.ADD_ITEM, payload: item });
  };

  const removeItemHandler = (id: any): void => {};

  const cartContext: ICartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
