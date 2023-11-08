import { Container, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { selectAllCart } from "../redux/CartSlice";

const Cart = () => {
  const CartProducts = useSelector(selectAllCart);

  return (
    <Container>
      <Stack direction={"column"} gap={1} p={2} alignItems={"center"}>
        {CartProducts?.length ? (
          CartProducts.map((product) => (
            <CartItem CartProduct={product} key={product.productId} />
          ))
        ) : (
          <>
            <Typography color={"gray"} p={2}>
              No Cart Items Found
            </Typography>
            <Link to={"/"}>Got to Purchase</Link>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default Cart;
