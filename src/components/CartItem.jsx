import {
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DecrementQty, IncrementQty, RemoveCart } from "../redux/CartSlice";
import { MdOutlineClear } from "react-icons/md";

const CartItem = ({ CartProduct }) => {
  const dispatch = useDispatch();

  //All Product Data Get from Cart Duplicate Products List
  let product = useSelector(state=>state.Product.AllProducts);

  //Get Product Filtered By Id
  product=product.find(product=>product.id===CartProduct.productId)
  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: 300, md: 500 },
        height: 150,
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        p: 1,
      }}
    >
      {/* Product Image  */}
      <CardMedia
        component={"img"}
        width={'100px'}
        height={"90px"}
        sx={{ objectFit: "contain", width: { xs: 100, md: 150 } }}
        image={product?.image}
      />
      {/* product content  */}
      <CardContent sx={{ width: "60%" }}>
        <Typography width={"100%"} m={0} textAlign={"end"}>
          {/* delete Product dispatch  */}
          <IconButton
            size="small"
            color="error"
            onClick={() => dispatch(RemoveCart(CartProduct.productId))}
          >
            <MdOutlineClear />
          </IconButton>
        </Typography>
        <Typography
          variant="subtitle2"
          color={"gray"}
          fontSize={{ xs: 12, md: 14 }}
        >
          {product?.category}
        </Typography>
        <Typography
          variant="h6"
          textOverflow={"ellipsis"}
          fontSize={"inherit"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}
        >
          {product?.title}
        </Typography>
        <Stack direction={"row"} pb={1} justifyContent={"space-between"}>
          <Typography variant="subtitle2" color={"gray"}>
            $. {product?.price}
          </Typography>
          <FormControlLabel value={product?.rating.rate} control={<Rating
            size="small"
            readOnly
            precision={0.5}
          />}/>
          
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Typography component={"span"}>Qty :</Typography>

          {/* Product IncrementQty dispatch   */}
          <IconButton
            size="small"
            color="secondary"
            onClick={() => dispatch(IncrementQty(CartProduct))}
          >
            <AiOutlinePlus />
          </IconButton>
          <Typography component={"span"}>{CartProduct.quantity}</Typography>

          {/* Product DecrementQty dispatch   */}
          <IconButton
            size="small"
            color="secondary"
            disabled={CartProduct.quantity <= 1}
            onClick={() => dispatch(DecrementQty(CartProduct))}
          >
            <AiOutlineMinus />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CartItem;
