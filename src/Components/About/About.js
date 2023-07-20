import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import img1 from '../../images/bag-1.png';
import img2 from '../../images/bag-2.png';
import img3 from '../../images/bag-3.png';
import img4 from '../../images/jeans-1.jpg';
import img5 from '../../images/jeans-2.jpg';
import img6 from '../../images/jeans-3.jpg';
import img7 from '../../images/jeans-4.jpg';
import img8 from '../../images/jeans-5.jpg';

import './About.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "grey" : "rgb(219, 215, 215);",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function About() {
 
  return (
    <>
      <h3 style={{ fontFamily: "sans-serif" }}>Bag & Jeans Collection</h3>
      <br />
      <Box sx={{ flexGrow: 1, backgroundColor: "#FDFDFD" }}>
        <Grid container spacing={1}>
          <Grid className="grid-hover" xs={3}>
            <Item>
              {" "}
              <img src={img1} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Bag </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img2} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Bag </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img3} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Bag </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img4} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Jeans </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img5} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Jeans </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img6} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Jeans </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img7} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Jeans </h5>
          </Grid>
          <Grid xs={3}>
            <Item>
              {" "}
              <img src={img8} alt="first images"></img>
              <div className="product-description">
                <p>Price:$300</p>
                <button className="btn btn-danger">Add to Cart</button>
              </div>
            </Item>
            <h5> Kinda Jeans </h5>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
/*


*/