import { Reducer } from 'umi';
import { CartProductType } from '@/@types/product';

export interface CartModelState {
  data: CartProductType[];
}

export interface CartModelType {
  namespace: 'cart';
  state: CartModelState;
  effects: {};
  reducers: {
    saveCart: Reducer<CartModelState>;
  };
}

const CartModel: CartModelType = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    saveCart(state, { payload }) {
      let newState = state?.data.concat(payload?.data)
      return { data : newState };
    },
  },
};
export default CartModel;