
import { Card, CardContent, CardMedia, Grid, Typography, Button, Box } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DnsIcon from '@mui/icons-material/Dns';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnimationRoundedIcon from '@mui/icons-material/AnimationRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  return (
    <>
{/* intro section */}
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
{/* Usecase Section */}

<Grid container spacing={2} sx={{
        mt:7
    }}>
      <Grid item xs={12} sm={4}>
        
        <Card sx={{ padding: 8, backgroundColor: "#f9a227", borderRadius: 5, color:"#FFFFFF"}}>
          <CardMedia sx={{ height: 140 }}>
            < WorkspacePremiumIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px",
                color:"#FFFFFF"


            }}/>
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF",
            }}>
              web3 E-commerce
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              
                fontWeight: "bold",
                textAlign: "center",
                 mb:2,
                 color:"#FFFFFF"
            }}>
             CoreList aims to facilitate commerce by leveraging the power of web3. By using smart contracts,
              people from across the world can trade and exchange services in a secure and decentralized manner.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ padding: 10, backgroundColor: "#7856ff", borderRadius: 5,  color:"#FFFFFF"}}>
          <CardMedia sx={{ height: 140 }}>
            <DnsIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px",
                color:"#FFFFFF"
                }} />
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign:"center",
                color:"#FFFFFF"
            }}>
              Domain name service
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus quam sed velit cursus dapibus.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent : 'flex-end', }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ padding: 10, backgroundColor: "#409e5c", borderRadius: 5}}>
        
          <CardMedia sx={{ height: 140 }}>
            <AccountBalanceWalletIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"50px", color:"#FFFFFF"
                }} />
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
            }}>
              Wallet
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color:"#FFFFFF"
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus quam sed velit cursus dapibus.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
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
        <Card sx={{ padding: 10, backgroundColor: "#f9a227", borderRadius: 5}}>
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
        <Card sx={{ padding: 10, backgroundColor: "#7856ff", borderRadius: 5 ,color: '#FFFFFF'}}>
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
              Escrow Gateway
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color: '#FFFFFF'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus quam sed velit cursus dapibus.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='contained'>Go to App<ArrowForwardIcon/></Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ padding: 10, backgroundColor: "#409e5c", borderRadius: 5 ,color: '#FFFFFF'}}>
        
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

    {/* Partnership Section */}
    <Typography variant= 'h3' sx={{
            mt:10,
            textAlign:"center",
            fontWeight: "bold",
            color:'white'
        }}>
        Ecosytem Partners
        </Typography>
        <Grid container spacing={2} sx={{ mt:6}}>
      <Grid item xs={6}  sm={3}>
      <Typography variant='h5'  color='white'>CoreDao</Typography>
        <Box
        component='img'
    sx={{
      width:'100px',
      height:'100px'

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
      height:'100px'
  }}
  alt=""
  src='/cheetahpad.png'
/> 
        </Grid>
        </Grid>

    {/* About the APP */}
    <Grid container spacing={2}>
<Grid item xs={12} md={6} sx={{
    mt:20,
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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu dolor non orci tincidunt bibendum.
    Praesent laoreet lacus sit amet metus gravida malesuada.
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




    </>
  )
}
