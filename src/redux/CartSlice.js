import {
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";

const Cart = createEntityAdapter({
  selectId: (product) => product.productId,
});

const CartSlice = createSlice({
  name: "Cart",
  initialState: Cart.getInitialState(),
  reducers: {
    //products adding to cart
    AddCart: (state, action) => {
      const Data = {
        productId: action.payload,
        quantity: 1,
      };
      Cart.addOne(state, Data);
      alert("Product Added!");
    },

    //delete Product from Cart Store
    RemoveCart: (state, action) => {
      Cart.removeOne(state, action.payload);
      alert("Product  Deleted!");
    },

    //increase the Product quantity
    IncrementQty: (state, action) => {
      const Data = {
        ...action.payload,
        quantity: action.payload.quantity + 1,
      };
      Cart.upsertOne(state, Data);
    },

    //Decrease the Product quantity
    DecrementQty: (state, action) => {
      const Data = {
        ...action.payload,
        quantity: action.payload.quantity - 1,
      };
      Cart.upsertOne(state, Data);
    },
  }
});

//secting All Cart Products
export const { selectAll: selectAllCart } = Cart.getSelectors(
  (state) => state.Cart
);

export const { AddCart, RemoveCart, IncrementQty, DecrementQty} =
  CartSlice.actions;
export default CartSlice.reducer;
