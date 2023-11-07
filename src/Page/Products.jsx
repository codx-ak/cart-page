import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/ProductSlice';
import { Container, Stack, Typography } from '@mui/material';
import ProductItem from '../components/ProductItem'
const Products = () => {

  const Products=useSelector(state=>state.Product.Products)
  const ProductStatus=useSelector(state=>state.Product.status)
  const ProductError=useSelector(state=>state.Product.error)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(ProductStatus==='idle'){
      dispatch(fetchProducts())
    }
  },[ProductStatus,dispatch])

  let content

  if (ProductStatus === 'loading') {
    content = <Typography variant='subtitle2' p={2}>Loading....</Typography>
  } else if (ProductStatus === 'succeeded') {
    content = Products.map(product=><ProductItem product={product} key={product.id}/>)
  } else if (ProductStatus === 'failed') {
    content = <Typography variant='subtitle2' color={'red'} p={2}>{ProductError}</Typography>
  }

  return (
    <Container>
      <Stack direction={'row'} p={'10px 0'} flexWrap={'wrap'} justifyContent={'center'} gap={1}>
        {content}
      </Stack>
    </Container>
  )
}

export default Products