
import { Card, CardContent, CardMedia, Grid, Typography, Button, Box, Container } from '@mui/material';

import AnimationRoundedIcon from '@mui/icons-material/AnimationRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, {Fragment} from 'react'

export default function Service() {
  return (
    <>
    <Fragment>
      <Container 
      sx={{
        maxWidth:"lg",
      }}>
    <Typography variant='h3' 
         sx={{
           textAlign: 'center',
           textColor: '#FFFFFF',
           mt:10,
           fontWeight: "bold",
           color: '#FFFFFF'
    
           }}>
            Corelist Usecases   
            </Typography>

    <Grid container spacing={2} sx={{
        mt:7

    }}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ pb: 10, lineHeight:'8em',backgroundColor: "#f9a227", borderRadius: 5}}>
          <CardMedia sx={{ height: 140 }}>
            <AnimationRoundedIcon   color="primary" sx={{
                justifyContent: "center",
                fontSize:"60px",
                color: '#FFFFFF'

            }}/>
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                color: '#FFFFFF'
            }}>
              Marketplace
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                color: '#FFFFFF'
            }}>
        Our NFT marketplace features the best user experience and low market fees, which lets you trade NFTs quickly.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ pb: 10, lineHeight:'8em', backgroundColor: "#7856ff", borderRadius: 5 ,color: '#FFFFFF'}}>
          <CardMedia sx={{ height: 140 }}>
            <FlareRoundedIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"60px",
                color: '#FFFFFF'
              }}
                 />
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color: '#FFFFFF'
            }}>
             Web3 E-commerce
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color: '#FFFFFF'
            }}>
                CoreList aims to facilitate commerce by leveraging the power of web3. By using smart contracts,.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ pb: 10, lineHeight:'8em', backgroundColor: "#409e5c", borderRadius: 5 ,color: '#FFFFFF'}}>
        
          <CardMedia sx={{ height: 140 }}>
            <RocketLaunchRoundedIcon  color="primary" sx={{
                justifyContent: "center",
                fontSize:"60px",
                color: '#FFFFFF'
                
                }} />
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color: '#FFFFFF'
            }}>
              Launchpad
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign:"center",
                color: '#FFFFFF'
            }}>
             We provide NFT brands and creators a launchpad to create their collections.
               we provide all the technical expertise.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid> 
    </Container>
    </Fragment>
     </>
  );
 };
