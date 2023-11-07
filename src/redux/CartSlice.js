import {createSlice, nanoid } from "@reduxjs/toolkit"

const initialState={
  //initial State value
  value:[]
}

const CartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
      //products adding to cart
      AddCart:(state,action)=>{
        const Data={
          product:action.payload,
          //random id 
          id:nanoid(),
          quantity:1
        }
        if(state.value.length){
        //checking Existing Products with product id 
        const ExistingProduct=state.value.find(product=>product.product.id===action.payload.id)
        if(ExistingProduct){
          alert("Product Already Added!")
        }
        else{
          state.value.push(Data)
          alert("Product Added!")
        }
        }
        else{
          state.value.push(Data)
          alert("Product Added!")
        }
  
      },
      //delete Product from Cart Store
      RemoveCart:(state,action)=>{
        const ProductIndex=state.value.findIndex(product=>product.id===action.payload)
        state.value.splice(ProductIndex,1)
        alert("Product  Deleted!")
      },
      
      IncrementQty:(state,action)=>{
        const ProductIndex=state.value.findIndex(product=>product.id===action.payload)
        state.value[ProductIndex].quantity +=1
      },
      DecrementQty:(state,action)=>{
        const ProductIndex=state.value.findIndex(product=>product.id===action.payload)
        state.value[ProductIndex].quantity -=1
      }
    }
})

export const  {AddCart,RemoveCart,IncrementQty,DecrementQty} = CartSlice.actions
export default CartSlice.reducer