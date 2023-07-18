export interface ICartItems {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface ICartContext {
  items: Array<ICartItems>;
  totalAmount: number;
  addItem: (item: any) => void;
  removeItem: (id: any) => void;
}

export interface CartState {
  items: Array<ICartItems>;
  totalAmount: number;
}

export enum CartContextKind {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export interface CartContextActionAdd {
  type: CartContextKind.ADD_ITEM;
  payload: ICartItems;
}

export interface CartContextActionRemove {
  type: CartContextKind.REMOVE_ITEM;
  payload: string;
}

export type CartContextActions = CartContextActionAdd | CartContextActionRemove;
