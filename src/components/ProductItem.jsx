import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { BiSolidCart } from "react-icons/bi";
import { AddCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card variant="outlined" sx={{ width: 280, height: 300 }}>
      <CardMedia
        component={"img"}
        width={"100px"}
        height={"150px"}
        sx={{ objectFit: "contain", pt: 1 }}
        image={product.image}
      />
      <CardContent>
        <Typography
          variant="subtitle2"
          color={"gray"}
          fontSize={{ xs: 12, md: 14 }}
        >
          {product.category}
        </Typography>
        <Typography
          variant="h6"
          textOverflow={"ellipsis"}
          fontSize={{ xs: 14, md: 16 }}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
        >
          {product.title}
        </Typography>
        <Stack direction={"row"} pb={1} justifyContent={"space-between"}>
          <Typography variant="subtitle2" color={"gray"}>
            $. {product.price}
          </Typography>
          <Rating
            size="small"
            readOnly
            value={product.rating.rate}
            precision={0.5}
          />
        </Stack>
        {/* product add to cart dispatch  */}
        <Button
          type="button"
          variant="outlined"
          onClick={() => dispatch(AddCart(product.id))}
          fullWidth
          startIcon={<BiSolidCart />}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
