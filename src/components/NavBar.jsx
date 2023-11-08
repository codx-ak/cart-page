import {
  AppBar,
  Badge,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCart } from "../redux/CartSlice";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import { ChangeTheme } from "./Theme";
const NavBar = () => {
  const Cart = useSelector(selectAllCart);
  const theme = useTheme();
  const [changeMode,setMode]=useContext(ChangeTheme)
  console.log(changeMode);
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
        <FormControlLabel
        onChange={()=>setMode(!changeMode)}
        sx={{pl:2}}
          control={
            <Switch
              icon={<BiSun />}
              sx={{
                '& .MuiSwitch-switchBase': {
                  p:0.5,
                  m:0.8,
                  '&.Mui-checked': {
                    m:0.8,
                    p:0.5,
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        opacity: 1,
                        backgroundColor: theme.palette.mode === 'light' ? '#fff' : 'black',
                      },
                    },
                  },
                }}
              checkedIcon={<BsMoonStarsFill />}
            />
          }
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
