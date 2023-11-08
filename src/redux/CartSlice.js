import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const Cart = createEntityAdapter({
  selectId: (product) => product.productId,
});

//fetching All Products and  Store to cart Store
export const fetchProductstoCart = createAsyncThunk("cart/AllProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const CartSlice = createSlice({
  name: "Cart",
  initialState: Cart.getInitialState({
    status: "idle", // idle | 'loading' | 'succeeded' | 'failed',
    error: null,
    //All Products List Duplicate
    Products: [],
  }),
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductstoCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductstoCart.fulfilled, (state, action) => {
        state.Products = state.Products.concat(action.payload);
      })
      .addCase(fetchProductstoCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//secting All Cart Products
export const { selectAll: selectAllCart } = Cart.getSelectors(
  (state) => state.Cart
);

export const { AddCart, RemoveCart, IncrementQty, DecrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
