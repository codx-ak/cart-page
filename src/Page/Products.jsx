import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchProducts,selectAllProducts} from "../redux/ProductSlice";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ProductItem from "../components/ProductItem";
const Products = () => {
  const Products = useSelector(selectAllProducts);
  const ProductStatus = useSelector((state) => state.Product.status);
  const ProductError = useSelector((state) => state.Product.error);
  const dispatch = useDispatch();

  let content;

  if (ProductStatus === "loading") {
    content = (
      <Typography variant="subtitle2" p={2}>
        Loading....
      </Typography>
    );
  } else if (ProductStatus === "succeeded") {
    content = Products?.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));
  } else if (ProductStatus === "failed") {
    content = (
      <Typography variant="subtitle2" color={"red"} p={2}>
        {ProductError}
      </Typography>
    );
  }

  return (
    <Container>
      <FormControl sx={{ marginLeft:{xs:4,md:0},mt:2, width:{xs:280,md:250} }}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          label="Category"
          defaultValue={""}
          onChange={(e) => dispatch(SearchProducts(e.target.value))}
        >
          <MenuItem value="" disabled></MenuItem>
          <MenuItem value="electronics">electronics</MenuItem>
          <MenuItem value="jewelery">jewelery</MenuItem>
          <MenuItem value="men's clothing">men's clothing</MenuItem>
          <MenuItem value="women's clothing">women's clothing</MenuItem>
        </Select>
      </FormControl>
      <Stack
        direction={"row"}
        p={"10px 0"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={1}
      >
        {content}
      </Stack>
    </Container>
  );
};

export default Products;
