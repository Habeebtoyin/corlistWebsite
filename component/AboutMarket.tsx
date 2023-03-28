
import { Grid, Typography, Paper, Button, Container} from '@mui/material';
import { Box, borderRadius } from '@mui/system';
import React, {Fragment} from "react";


export default function AboutComp() {
  return (
    <>
  <Fragment>  
    <Container>
 <Grid container spacing={3}>
<Grid item xs={12} md={6} sx={{
    mt:20,
    mb:5
}}>
  <Typography variant="h3" 
  sx={{
    mr:2,
    mt:15,
    mb:4,
    p:2,
    color:'white'

  }}gutterBottom>
    CoreList web3 Marketplace
  </Typography>
  <Typography variant="h6" paragraph  color='white'>
  CoreList features a comprehensive suite of Web3 products that make it easy for you to be a part of the decentralized economy.
  </Typography>
  <Button variant='contained'
   sx={{
    borderRadius: 10,
    boxShadow:'10',
    color:'white',
    outline: 'transparent',

  }}>Go to Marketplace</Button>
  
</Grid>
<Grid item xs={12} md={6} sx={{
    mt:20,
}}>
    <Box 
    component='img'
    sx={{
      width:'500px',
      height:'500px',
      mt: '10px',
      borderRadius:7,


  }}
  alt=""
  src='/app.PNG'


/>
</Grid>
</Grid> 
</Container>
</Fragment>

</>
  );
}

