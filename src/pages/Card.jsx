import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Cards = () => {
  const cardItem = useSelector((state) => state.cart);
  return (
    <>
      <Box mt={4}>
        <Grid container spacing={2}>
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
