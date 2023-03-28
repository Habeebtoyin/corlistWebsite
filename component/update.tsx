import {
     Typography, 
     Card,
    CardMedia,
    CardContent,
    Box, 
    TextField, 
   InputAdornment,
   IconButton,
   Button,
   Container
     } 
from "@mui/material"
import React, {Fragment, useState} from "react"
import DraftsIcon from '@mui/icons-material/Drafts';
import SearchIcon from '@mui/icons-material/Search'
import { borderRadius, padding, textAlign, fontWeight } from '@mui/system';

export default function Update() {
     const [email, setEmail] = useState('');
     const [success, setSuccess] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      // Do something with the search text
      console.log(searchText);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
  
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setSearchText(e.target.value);

      //the output for the search text
      
    };
    const handleSignUp = () => {
      // Here you can add your logic to send the email to your server or do whatever you want with it
      setSuccess(true);
    };


  return (
    <>
    <Fragment>
    <Card sx={{ padding: 7, backgroundColor: "#f2f2f2", borderRadius: 5 ,color: '#FFFFFF', mt:20}}>
          <CardMedia sx={{ height: 140 }}>
            <DraftsIcon color="primary" sx={{
                justifyContent: "center",
                fontSize:"60px",
                color: '#000000'
              }}
                 />
          </CardMedia>
          <CardContent sx={{ pt: 0 }}>
            <Typography gutterBottom variant="h3" component="div" sx={{
                mb:3,
                fontWeight: "bold",
                textAlign: "center",
                color: '#000000',
                padding: 2
            }}>
              Stay Up to date
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
                mb:2,
                fontWeight: "bold",
                textAlign: "center",
                color: '#000000'
            }}>
              Fresh news from CoreList delivered straight to your inbox.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}> 
            <TextField
      label="Email"
      variant="outlined"
      value={email}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {/* <IconButton onClick={handleSearch}> */}
            <IconButton onClick={handleSignUp}>
              
            </IconButton>
          </InputAdornment>
  )}}
  /><Button variant="contained" color="primary"
  sx={{
   borderRadius:"15px",
   height:"50px",
   width:"100px"
   

 }} onClick={handleSignUp}>SignUp</Button>
  {success && <Container sx={{
    color:"black",
    textAlign: "center",
    justifyContent: "center",
    fontWeight:"bold"
  }}>Success</Container>}
  </Box>
            
            
          </CardContent>
        </Card>
    </Fragment>
    </>
    
  )
}

