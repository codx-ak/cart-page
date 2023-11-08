import { createAsyncThunk, createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
const Products=createEntityAdapter({
  selectId:(product)=>product.id
})

// Getting Products Data with API
export const fetchProducts = createAsyncThunk(
  "Product/GetProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

// filter product with category
export const SearchProducts = createAsyncThunk(
  "Product/SearchProducts",
  async (category) => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/" + category
    );
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "Product",
  initialState:Products.getInitialState({
    status: "idle", // idle | 'loading' | 'succeeded' | 'failed',
    error: null,
    AllProducts:[]
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched Products to the array
        Products.upsertMany(state,action.payload)
        //Duplicating the Product List
        state.AllProducts=state.AllProducts.concat(action.payload)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //filter API
      .addCase(SearchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(SearchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Replace fetched Products to the array
        Products.setAll(state,action.payload)
      })
      .addCase(SearchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//selecting all Products and Selected By id products
export const {selectAll:selectAllProducts,selectById:selectByProductId }=Products.getSelectors(state=>state.Product)

export default ProductSlice.reducer;
