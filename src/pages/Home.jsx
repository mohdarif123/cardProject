import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { add } from "../Redux/Cartslice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);
  };
  const handlAdd = (productData) => {
    dispatch(add(productData));
  };

  return (
    <>
      <Box mt={4}>
        <Grid container spacing={2}>
          {product.map((items) => {
            return (
              <>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Card
                    sx={{ maxWidth: 345, minHeight: 445, marginBottom: "10px" }}
                    key={product.id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={items.image}
                      title="product_Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {items.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"$" + items.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        sx={{
                          background: "black",
                          color: "white",
                          cursor: "pointer",
                          borderRadius: "20px",
                          "&:hover": {
                            background: "white",
                            color: "black",
                            cursor: "pointer",
                            borderRadius: "20px",
                            border: "1px solid blue",
                          },
                        }}
                        onClick={() => handlAdd(items)}
                      >
                        Add Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Home;
