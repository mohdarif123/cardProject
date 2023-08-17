import { Box, Button, CardActions, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { remove } from "../Redux/Cartslice";

const Cards = () => {
  const cardItem = useSelector((state) => state.cart);
  const dispatchCard = useDispatch();

  const handleRemove = (data) => {
    dispatchCard(remove(data.id));
  };
  return (
    <>
      <Box mt={4}>
        <Typography variant="h3">Cart Page</Typography>
        <Grid container spacing={2} mt={3}>
          {cardItem.map((items) => {
            return (
              <>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Card
                    sx={{ maxWidth: 345, minHeight: 445, marginBottom: "10px" }}
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
                        onClick={() => handleRemove(items)}
                      >
                        Remove Cart
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
export default Cards;
