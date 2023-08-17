import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const selector = useSelector((state) => state.cart); //its callback function and it container all state
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component={"span"}>Redux</Typography>
        <Box sx={{ marginTop: "30px", marginRight: "30px", display: "flex" }}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{ fontSize: "20px", marginRight: "20px", fontWeight: 600 }}
            >
              Home
            </Typography>
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{ fontSize: "20px", marginLeft: "20px", fontWeight: 600 }}
            >
              Cart
            </Typography>
          </Link>
          <Typography
            component={"span"}
            sx={{ marginLeft: "20px", fontSize: "20px", fontWeight: 600 }}
          >
            {selector?.length}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
