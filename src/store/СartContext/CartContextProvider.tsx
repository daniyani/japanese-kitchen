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

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem: ICartItems;
    let updatedItems: Array<ICartItems>;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + payload.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...payload };

      updatedItems = state.items.concat(updatedItem);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === CartContextKind.REMOVE_ITEM) {
    const { payload } = action;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === payload
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems: Array<ICartItems>;

    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter(
        (item) => item.id !== existingCartItem.id
      );
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === CartContextKind.RESET_ITEMS) {
    return defaultState;
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

  const removeItemHandler = (id: string): void => {
    cartDispatcher({ type: CartContextKind.REMOVE_ITEM, payload: id });
  };

  const resetItemsHandler = (): void => {
    cartDispatcher({ type: CartContextKind.RESET_ITEMS });
  };
  const cartContext: ICartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    resetItems: resetItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
