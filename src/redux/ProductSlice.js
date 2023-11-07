import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
  //initial state
    Products:[],
    status: 'idle',  // | 'loading' | 'succeeded' | 'failed',
    error:null
}

// Getting Products Data with API
export const fetchProducts = createAsyncThunk('Product/GetProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  })

const ProductSlice=createSlice({
    name:'Product',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
          .addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched Products to the array
            state.Products = state.Products.concat(action.payload)
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
        }
})

export default ProductSlice.reducer