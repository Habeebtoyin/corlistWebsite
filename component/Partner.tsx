import { Typography, Box, Container } from '@mui/material';
import {Grid} from '@mui/material'
import React, {Fragment} from "react";
export default function Partner() {
    return (
        <>
        <Fragment>
          <Container>
        <Typography variant= 'h3' sx={{
            mt:10,
            textAlign:"center",
            fontWeight: "bold",
            color:'white'
        }}>
        Ecosytem Partners
        </Typography>
        <Grid container spacing={2} sx={{ mt:6 }}>
      <Grid item xs={6}  sm={3}>
      <Typography variant='h5'  color='white'>CoreDao</Typography>
        <Box
        component='img'
    sx={{
      width:'100px',
      height:'100px',
      justifyContent: "flex-end"
  }}
  alt=""
  src='/core_.png'

/> 
        
        </Grid>
        <Grid item xs={6}  sm={3}>
        <Typography variant='h5' color='white'>Riceswap</Typography> 
        <Box
        component='img'
    sx={{
      width:'100px',
      height:'100px'
  }}
  alt=""
  src='/ricerv.png'
/> 

      </Grid>
        <Grid item xs={6}  sm={3}>
        <Typography variant='h5'  color='white'>IceCreamswap</Typography>
<Box
        component='img'
    sx={{
      width:'100px',
      height:'100px',
      justifyContent: "flex-end"
     
      
  }}
  alt=""
  src='/icecream.png'
/>
      
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant='h5'  color='white'>Cheetahpad</Typography>
     <Box
     component='img'
    sx={{
      width:'100px',
      height:'100px',
      justifyContent: "flex-end"
  }}
  alt=""
  src='/cheetahpad.png'
/> 
        </Grid>
        </Grid>
        </Container>
        </Fragment>
     
    
        </>
   )
 }