
import { Grid, Typography, Paper, Button,Container } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import React, {Fragment} from "react";


export default function Intro() {
  return (
    <>
   <Fragment> 
    <Container>
 <Grid container spacing={2}>
<Grid item xs={12} md={6}>
  <Typography variant="h2" 
  sx={{
    mr:2,
    mb:2,
    mt:10,
    p:2,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign:'center',
    color: "white"


  }}gutterBottom>
    CoreList web3 Marketplace for everyone
  </Typography>
  <Typography variant="h6" paragraph   fontWeight= "bold" sx={{
    justifyContent: "center",
    color: "white"
  }}>
  CoreList is a web3 brand building innovative and decentralized applications, which foster the adoption of the Core blockchain.
  </Typography>
  <Button variant='contained'
   sx={{
    borderRadius: 10,
    boxShadow:'10'

  }}>Go to Marketplace</Button>
  
</Grid>
<Grid item xs={12} md={6}>
    <Box 
    component='img'
    sx={{
      width:'600px',
      height:'400px',
      mt:3
  }}
  alt=""
  src='/marketplace.png'


/>
</Grid>
</Grid> 
</Container>
</Fragment>

 </>
  );
} 

