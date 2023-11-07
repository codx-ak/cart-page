import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const Cart = useSelector((state) => state.Cart.value);
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Codx .
        </Typography>
        <Link to={"/cart"} style={{ color: "inherit" }}>
          <IconButton color="inherit">
            <Badge badgeContent={Cart?.length} color="secondary">
              <BsFillHandbagFill />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
