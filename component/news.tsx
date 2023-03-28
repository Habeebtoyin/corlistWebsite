import React from 'react';
import {Card, CardContent, Typography, CardMedia, Button  } from '@mui/material'
import {Grid} from '@mui/material'
import { Box, borderRadius } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function News() {
    const cardData = [
        { title: 'Annouoncement', imageUrl: 'https://www.shutterstock.com/image-vector/web-30-new-generation-internet-260nw-2160127645.jpg', content: 'Partnering with Riceswap and Mises.', buttonText:'Read More' },
        { title: 'AMA', imageUrl: '/banner2.gif', content: 'This is the content for Card 2.', buttonText:'Listen More' },
        { title: 'Post', imageUrl: '/banner1.png', content: 'This is the content for Card 3.', buttonText:'Read More' },
        { title: 'Press', imageUrl: 'https://source.unsplash.com/random/300x200', content: 'This is the content for Card 4.', buttonText:'Read More' },
        
      ];
    return (
<div>
    <Box>
    <Typography variant="h3"
    sx={{
        fontWeight: 'bold',
        color:"white",
        mt:10,
        mb:2

    }}
    >
        Latest News

    </Typography>
    <Typography component="p" 
    sx={{ 
        fontWeight: 'bold',
        color:"white",
        mb:2
      
    }}>Stay informed and learn about Corelist ‘s latest news and development updates</Typography>
    </Box>

<Grid container spacing={2} sx={{
    mt:"20px" , 
    padding:10,
    justifyContent: 'center',
    mb:10,
    

    }}>
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card style={{ height: '100%', borderRadius:25 }}>
            <CardMedia component="img" image={data.imageUrl} title={data.title} style={{ height: '200px' }} />
            <CardContent>
              <Typography variant="h5" component="h2" style={{ minHeight: '3em' }}>
                {data.title}
              </Typography>
              {/* <Typography color="textSecondary">
                {index + 1}
              </Typography> */}
              <Typography variant="body2" component="p" style={{ height: '3.2em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {data.content}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='outlined' 
              sx={{
                pt:0,
                borderRadius:"20px",
                mt:2,
                mb:3,
                textAlign:'center'

              }}>{data.buttonText}<ArrowForwardIcon/></Button>
            </Box>
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};
