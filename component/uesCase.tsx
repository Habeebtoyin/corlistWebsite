import { Card, CardContent, CardMedia, Grid, Typography, Button, Box, Container } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DnsIcon from '@mui/icons-material/Dns';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import React, {Fragment} from 'react'
import { display } from '@mui/system';

export default function Usecase() {
  return (
    <Fragment>
      <Container maxWidth="lg">
    <Grid container spacing={3} sx={{
        mt:7,
        display:"flex"
    }}>
      <Grid item xs={12} sm={4}>
        
        <Card sx={{ pb: 10, lineHeight:'8em', backgroundColor: "#f9a227", borderRadius: 5, color:"#FFFFFF", display:"flex", flexDirection: "column"}}>
          <CardMedia sx={{ height: 140 }}>
            < WorkspacePremiumIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px",
                color:"#FFFFFF"


            }}/>
          </CardMedia>
          <CardContent sx={{ pt: 0, flexGrow:1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF",
            }}>
              Domain Name Service
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              
                fontWeight: "bold",
                textAlign: "center",
                 mb:2,
                 color:"#FFFFFF"
            }}>
            Get your own customized web3 domain name and share with your web3 friends.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ pb: 10, lineHeight:'8em', backgroundColor: "#7856ff", borderRadius: 5,  color:"#FFFFFF",display:"flex", flexDirection: "column"}}>
          <CardMedia sx={{ height: 140 }}>
            <DnsIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px",
                color:"#FFFFFF"
                }} />
          </CardMedia>
          <CardContent sx={{ pt: 0, flowGrow:1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign:"center",
                color:"#FFFFFF"
            }}>
              Lending and Borrowing
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
            }}>
              you can lend or borrow coin in our platform seamlessly.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent : 'flex-end', }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ pb: 10, lineHeight:'8em', backgroundColor: "#409e5c", borderRadius: 5, display:"flex", flexDirection: "column"}}>
        
          <CardMedia sx={{ height: 110 }}>
            <AccountBalanceWalletIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px", color:"#FFFFFF"
                }} />
          </CardMedia>
          <CardContent sx={{ pt: 0, flexGrow:1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
            }}>
              Wallet
            </Typography>
            <Typography  color="text.secondary" component="p" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
                
            }}>
             CoreList wallet features the latest industry standards in cryptography and cyber security to protect your assets. 
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Container>
    </Fragment>
  );
};
